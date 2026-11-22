const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true;
        },

        items: [
            {
                products: mongoose.Schema.Types.ObjectId,
                ref: "products",
                required: true,
            },

            name: {
                type: String,
                required: true,
            },

            image: {
                type: String,
            },
            {
                price: {
                    type: Number,
                    required: true,
                    min: 0,
                },
                quantitiy: {
                    type: Number,
                    required: true,
                    min: 1,
                },
            },

        ],


        shippingAddress: {
            fullName: {
                type: String,
                required: true,
            },


            email: {
                type: String,
                required: true,
            },

            phone: {
                type: String,
                required: true,
            },


            address: {
                type: String,
                required: true,

            },

            city:
            {
                type: String,
                required: true,
            },

            state:
            {
                type: String,
                required: true,
            },

            pincode: {
                type: String,
                required: true,
            },
        },


        subtotal: {
            type: Number,
            required: true,
            min: 0,
        },

        deliveryCharge: {
            type: Number,
            required: true,
            min: 0,

        },


        totalAmount:
        {
            type: Number,
            required: true, min: 0,
        },


        paymentMethod:
        {
            type: String,
            required: true,
            enum: ["COD", "Online"],
            default: "COD",
        },

        paymentStatus:
        {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },

        orderStatus:
        {
            type: String,
            enum: [
                "placed", "confirmed", "Shipped", "Delivered", "Canceled", "Returned"
            ],
        },
    },

    {
        timestamps: true,
    }

);

const Order=mongoose.model("Order", orderSchema);