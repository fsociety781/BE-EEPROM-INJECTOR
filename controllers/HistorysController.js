const prisma = require('../bin/prisma')

class HistorysController {
    // static async index(req, res) {

    // }

    static async store(req, res) {
        try{
            const { barcode, name, token, uuid, datetime } = req.body;
            if( !barcode || !name || !token || !uuid || !datetime ){
                return res.status(400).json({ 
                    status: '400',
                    message: "All parameters must be filled!"
                 });
            }

            const history =  await prisma.inject_history.create({
                data: {
                    barcode: barcode,
                    name: name,
                    token: token,
                    uuid: uuid,
                    DateTime: datetime
                }
            })

            return res.status(200).json({
                status: '200',
                message: 'Succes Create History',
                data: history
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

}

module.exports = HistorysController;