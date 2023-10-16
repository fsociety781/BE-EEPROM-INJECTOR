const prisma = require('../bin/prisma')

class EepromController {
    static async index(req, res) {
        try{
          
            const feeders = await prisma.feeders.findMany({
                select: {
                    id: true,
                    barcode: true,
                    name: true,
                    token: true,
                    uuid: true,
                    jwt: true,
                    type: true,
                    version: true,
                    status: true,
                }
            })

            if(feeders)
            
            // if(feeders.length == 0){
            //     return res.status(200).json({ 
            //         status: '200',
            //         message: "Data not found!"
            //      });
            //     }else{
                    return res.status(200).json({ 
                        status: '200',
                        message: "Success!",
                        data: feeders
                     });
                // }
            }catch(err){
                console.log(err);
                return res.status(500).json({ message: "Internal Server Error" });
            }
    }

    static async store(req, res) {
        try{
            const { barcode, name, token, uuid, jwt, type, version} = req.body;
            if( !barcode || !name || !token || !uuid || !jwt || !type || !version ){
                return res.status(400).json({ 
                    status: '400',
                    message: "All parameters must be filled!"
                 });
            }

            const feeders = await prisma.feeders.create({
                data: {
                    barcode: barcode,
                    name: name,
                    token: token,
                    uuid: uuid,
                    jwt: jwt,
                    type: type,
                    version: version
                }
            })
            return res.status(200).json({ 
                status: '200',
                message: "Success!",
                data: feeders
             });
        }catch(err){
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    static async update(req, res) {
        try{
            let {id} = req.params
            const {status} = req.body
            
            id = parseInt(id)   

            const status_feeder = await prisma.feeders.update({
                where:{
                    id: id,
                },
                data: {
                    status: status
                }
            })

            return res.status(200).json({
                status: 200,
                message: "status updated"
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = EepromController