import FarmerDetail from '../../model/farmData/FarmerDetailModel.js'

export const createFarmerDetail = async (req, res) => {
  try {
    const user = await FarmerDetail.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getFarmerDetail = async (data) => {
  try {
    const user = await FarmerDetail.findOne({uid:data});
    return user.name
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createFarmerDetail,getFarmerDetail}