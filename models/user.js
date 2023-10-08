import mongoose from 'mongoose'
const {Schema, model} = mongoose

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        wallet: {
            type: mongoose.Types.Decimal128,
            required: true
        },
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
)

export default model("User", userSchema)