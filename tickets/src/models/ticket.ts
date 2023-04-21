import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface TicketAttrs
{
  title: string;
  price: number;
  userId: string;
  category?: string;
  subcategory?: string;
  location?: string;
  address?: string;
  date?: Date;
  time?: string;
}

interface TicketDoc extends mongoose.Document
{
  title: string;
  price: number;
  userId: string;
  category?: string;
  subcategory?: string;
  location?: string;
  address?: string;
  date?: Date;
  time?: string;
  version: number;
  orderId?: string;
}

interface TicketModel extends mongoose.Model<TicketDoc>
{
  build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false
    },
    subcategory: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
    orderId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret)
      {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
ticketSchema.set('versionKey', 'version');
ticketSchema.plugin(updateIfCurrentPlugin);

ticketSchema.statics.build = (attrs: TicketAttrs) =>
{
  return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };
