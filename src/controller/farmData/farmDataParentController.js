import Parent from "../../model/farmData/farmDataParentModel.js";
import Child from "../../model/farmData/farmDataChildModel.js";

export const createParent = async (req, res) => {
  try {
    const user = await Parent.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getParent = async (req, res) => {
  console.log('req: ', req.query.name);
  try {
    const parentData = await Parent.find({ uid: req.params.id,animal:req.query.name });
    const childData = await Child.find({ uid: req.params.id,animal:req.query.name });
    const user = parentData.concat(childData);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// export const getParent = async (req, res) => {
//   try {
//     // Assuming 'parentId' is the common field between Parent and Child collections
//     const pipeline = [
//       {
//         $match: { parentId: req.params.parentId } // Filter documents by parentId
//       },
//       {
//         $lookup: {
//           from: "child", // Name of the Child collection
//           localField: "_id",
//           foreignField: "parentId",
//           as: "children" // Output array field name
//         }
//       },
//       {
//         $unwind: "$children" // Deconstructs the children array
//       }
//     ];

//     const result = await Parent.aggregate(pipeline).toArray();

//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

export const updateParent = async (req, res) => {
  try {
    const user = await Parent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteParent = async (req, res) => {
  try {
    const user = await Parent.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { createParent, getParent, updateParent, deleteParent };
