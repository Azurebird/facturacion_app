import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const BillSchema = new Schema(
  {
    userId: { type: String, required: true },
    client: { type: Schema.Types.Mixed, required: true },
    createdAt: { type: Date, default: () => moment().toDate() },
    products: { type: Schema.Types.Array },
  },
  { timestamps: true },
);

const Bill = mongoose.model('bill', BillSchema);

export default Bill;
