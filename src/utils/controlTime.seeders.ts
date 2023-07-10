import { TimeControl } from "../models/timeControl.model";
import connectDB from "../config/database.config";
import { User } from "../models/user.model";


connectDB();

async function getIds() {
  try {
    const userId: any = []
    const users = await User.find();
    users.forEach((user) => {
      userId.push(user._id)
    })
    return userId;
    } catch (error) {
      return console.error(error)
    }
  }
async function seedTimeControl() {
    try {
      console.time('deleted')
      await TimeControl.deleteMany();
      console.log('❌ Time control deleted successfully')
      console.timeEnd('deleted')

      console.time('created')
      const usersIds = await getIds();
      for (const i in usersIds) {
        await TimeControl.create({
          startDate: Date.now(),
          user: usersIds[i]
        });
      }
      console.log('👌 Time control created successfully')
      console.timeEnd('created')

    } catch (error) {
      console.log(error)
    }
  }
seedTimeControl();
