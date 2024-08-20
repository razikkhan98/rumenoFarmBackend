import transaction from "../../model/user/transactionModel.js";


export const getDashboardDetails = async (req, res) => {
  try {

    // total transactions
    const startDate = new Date();
    startDate?.setDate(startDate?.getDate() - 7);
    startDate?.setHours(0, 0, 0, 0);

    const endDate = new Date();
    endDate?.setDate(endDate?.getDate());
    endDate?.setHours(23, 59, 59, 999);
    const TotalTransaction = await transaction?.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    let Total = 0;
    for (let index = 0; index < TotalTransaction?.length; index++) {
      Total += TotalTransaction[index]?.amount;
    }
    

    // last 6 month transaction
    const results = [];

    for (let index = 0; index < 6; index++) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - index);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date();
      endDate.setDate(endDate.getDate() - index);
      endDate.setHours(23, 59, 59, 999);

      const lastSixTransaction = await transaction.find({
        createdAt: { $gte: startDate, $lte: endDate },
      });

      const totalAmount = lastSixTransaction.reduce(
        (sum, transaction) => sum + (transaction.amount || 0),
        0
      );
      const displayDate = new Date(startDate);
      displayDate.setDate(displayDate.getDate() + 1);

      results.push({
        date: displayDate.toISOString().split("T")[0],
        totalAmount,
      });
    }

    // lastest transaction
    const latestTransaction = await transaction.find().sort({ _id: -1 }).limit(1);
    
    
    // total sales
    const collections = await transaction.find({})
    let numberOfCollections = 0;
    for (let index = 0; index < collections.length; index++) {
        numberOfCollections += collections[index].cart.length        
    }
    // console.log('numberOfCollections: ', numberOfCollections);
    
    // barGraph Data
    const barGraphData = await transaction.find({})
    let numberOfbarGraphData;
    let bar;
    let graph;
    for (let index = 0; index < barGraphData.length; index++) {
         graph = barGraphData[index].cart
         console.log('graph: ', graph.length);
        for (let index = 0; index < graph.length; index++) {
            bar = graph[index]?.name
            console.log('bar: ', bar);
        }
        //  numberOfbarGraphData  = barGraphData[index].cart[index]?.name       
        //  console.log('numberOfbarGraphData: ', numberOfbarGraphData);
        }
        // console.log('barGraphData[index].cart: ', numberOfbarGraphData);


    




    res.send({
        // sixMonth:results,
        // lastTransaction:latestTransaction,
        // totalsale:numberOfCollections,
        // totalPayment:Total,
        bar : bar,
        graph:graph

    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
