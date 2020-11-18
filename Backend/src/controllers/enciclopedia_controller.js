const Enciclopedia = require('../models/enciclopedia_model')

class enciclopediaController {

    static async createInfo(info) {
        try {
            const title = info.title;
            const description = info.description;
            const content = info.content;
            const category = info.category;
            const new_info = new Enciclopedia({title, description, content, category})
            await new_info.save((err, doc) =>{
                console.log(err);
            });
            return new_info;
        } catch (e) {
            return e
        }
    }

    static async listInfo(){
        const enciclopedia = await Enciclopedia.find().sort({date: 'desc'}).lean();
        return enciclopedia;
    }
}

module.exports = enciclopediaController;