export const dummylogin = async (req, res) => {
    try {
        console.log(req.body);
        const responseData = {
          name: 'admin',
          date: '7/7/2027',
          msg:"Success",
          userName:"admin",
          FarmName:"panel",
          pID:"",
          uID: "7",
          rId: "rId",
          sessionId: "sessionId"
      
        };
        res.json(responseData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };