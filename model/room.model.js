const { default: mongoose } = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
            trim: true,
            maxLength: [100, 'Room name must be at least 100 characters'],
        },

        description: {
            type: String,
            required: [true, 'description is required!'],
            trim: true,
        },

        address: {
            type: String,
            required: [true, 'address is required!'],
            trim: true,
        },

        pricePerNight: {
            type: Number,
            required: [true, 'Please enter a room price'],
            maxLength: [4, 'Room price can not exceed 4 characters'],
            default: 0.0,
        },

        guestCapacity: {
            type: Number,
            default: 1,
        },

        numOfBeds: {
            type: Number,
            default: 1,
        },

        internet: {
            type: Boolean,
            default: false,
        },

        breakfast: {
            type: Boolean,
            default: false,
        },

        airConditioned: {
            type: Boolean,
            default: false,
        },
        petsAllowed: {
            type: Boolean,
            default: false,
        },

        roomCleaning: {
            type: Boolean,
            default: false,
        },
        rating: {
            type: Number,
            default: 0,
        },
        numberOfReview: {
            type: Number,
            default: 0,
        },

        numberOfReview: {
            type: Number,
            default: 0,
        },

        images: [
            {
                public_id: {
                    type: String,
                    required: [true, 'Please enter an image public id'],
                },
                url: {
                    type: String,
                    required: [true, 'Please enter an image url'],
                },
            },
        ],

        category: {
            type: String,
            required: [true, 'Please select a category'],
            enum: {
                type: String,
                values: ['King', 'Single', 'Twins'],
                message: 'Please select a category',
            },
        },

        reviews: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'User',
                    required: true,
                },
                name: {
                    type: String,
                    required: [true, 'Please enter a  name'],
                },
                comment: {
                    type: String,
                    required: [true, 'Please enter a comment '],
                },
                rating: {
                    type: Number,
                    required: [true, 'Please enter a rating'],
                },
            },
        ],

        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Room || mongoose.model('Room', roomSchema);
