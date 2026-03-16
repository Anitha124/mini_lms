require('dotenv').config({ override: true });
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const seedAdmin = require('./utils/seedAdmin');

// Import routes
const authRoutes = require('./routes/authRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Initialize Express app
const app = express();

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'EduNexus API is running',
        version: '1.0.0',
        documentation: 'https://github.com/jayaveerR/mini_lms#api-documentation'
    });
});

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:8080',
            'http://127.0.0.1:8080',
            /\.vercel\.app$/  // Correctly allow any submodule of vercel.app
        ];

        // Check if the origin is allowed
        const isAllowed = allowedOrigins.some(allowedOrigin => {
            if (allowedOrigin instanceof RegExp) {
                return allowedOrigin.test(origin);
            }
            return allowedOrigin === origin;
        });

        if (isAllowed || process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else {
            // In production, you might want to be more strict, 
            // but for now let's allow all during setup if it's a common issue
            callback(null, true); 
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'EduNexus API is running',
        timestamp: new Date().toISOString()
    });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Connect to database
        await connectDatabase();

        // Seed admin user
        await seedAdmin();

        // Start listening on all interfaces (0.0.0.0)
        app.listen(PORT, '0.0.0.0', () => {
            console.log('');
            console.log('════════════════════════════════════════');
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`🌐 API: http://localhost:${PORT}/api`);
            console.log('════════════════════════════════════════');
            console.log('');
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();
