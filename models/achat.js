import mongoose from 'mongoose'
const {Schema, model} = mongoose

const achatSchema = new Schema(
    {
        boughtDate: {
            type: Date,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        game: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Game"
        },
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
)

export default model("Achat", achatSchema)