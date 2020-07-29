import mongoose from 'mongoose'
import mongooseBcrypt from 'mongoose-bcrypt'

const UserScheme = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }]
}, {
  timestamps: true
})

UserScheme.plugin(mongooseBcrypt)

export default mongoose.model('User', UserScheme)
