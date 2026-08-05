import Campaign from "../models/Campaign.js";

export const getCampaigns = async (req, res) => {

    try {

        const campaigns = await Campaign.find().sort({

            createdAt: -1

        });

        res.status(200).json(campaigns);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};