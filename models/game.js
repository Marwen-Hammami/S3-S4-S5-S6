import mongoose from 'mongoose'
const {Schema, model} = mongoose

const gameSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: mongoose.Types.Decimal128,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
)

export default model("Game", gameSchema)