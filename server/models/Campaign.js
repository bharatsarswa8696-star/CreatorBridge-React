import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(

    {

        title: {

            type: String,
            required: true

        },

        brandName: {

            type: String,
            required: true

        },

        category: {

            type: String,
            required: true

        },

        platform: {

            type: String,
            required: true

        },

        budget: {

            type: Number,
            required: true

        },

        deadline: {

            type: Date,
            required: true

        },

        description: {

            type: String,
            default: ""

        },

        applicants: [

            {

                creator: {

                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"

                },

                status: {

                    type: String,

                    enum: [

                        "Pending",
                        "Accepted",
                        "Rejected",
                        "Completed"

                    ],

                    default: "Pending"

                }

            }

        ]

    },

    {

        timestamps: true

    }

);

export default mongoose.model("Campaign", campaignSchema);