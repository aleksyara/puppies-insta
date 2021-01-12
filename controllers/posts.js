const Post = require('../models/post');


module.exports = {
    create,
    index
}
// We have to use AWS and multer again for this
function create(req, res){
   console.log(req.body, req.file)
   res.json({data: 'working'})
}

async function index(req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information 
        // when you fetch teh posts
        const posts = await Post.find({}).populate('user').exec() // userSchema.set('toObject') gets invoked, to delete the password
        // when we populate the user so we don't have to worry about sending over the password!
        res.status(200).json({posts})
    } catch(err){

    }
}