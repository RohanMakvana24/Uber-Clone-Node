import mongoose from 'mongoose'

const connect_DB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("The Database is connected")
    } catch (error) {
        console.log(error)
    }

}

export default connect_DB;