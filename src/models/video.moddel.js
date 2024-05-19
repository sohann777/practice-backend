import mongoose, { Schema } from "mongoosee";

const videoSchema = new Schema(
  {
    videofile: {
      type: String, //from cloudnary
      required: true,
    },
    thumbnail: {
      type: String, //from cloudnary
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number, //from cloudnary
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const video = mongoose.model("video", videoSchema);
