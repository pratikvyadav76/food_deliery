const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const  Datastore  = require('nedb-promises')

const profilesDB = Datastore.create('/tmp/users.db')
const paymentsDB = Datastore.create('/tmp/payment.db')
const addressesDB =Datastore.create('/tmp/address.db')
const cartsDB =    Datastore.create('/tmp/cart.db')

const JWT_SECRET = 'your_jwt_secret_key'; 


const signup = async (req, res) => {
    const { name, password, phone, email } = req.body;

    const existingUser  = await profilesDB.findOne({name:name});
    const existingEmail  = await profilesDB.findOne({email:email});
    if (existingUser ) {
        return res.status(400).json({ message: 'User  already exists' });
    }
    if (existingEmail ) {
        return res.status(400).json({ message: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser  = {name, password: hashedPassword, phone, email, cart:[], payment:[], address:[]};
    await profilesDB.insert(newUser)
    const user = await profilesDB.findOne({email:email});
    res.status(201).json({data:user});
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await profilesDB.findOne({email:email});
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, token, data:user });
};

const updateProfile=async(req, res)=>{
    const {id} = req.params
    delete req.body['password']
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        await profilesDB.update({_id:id}, req.body) 
        res.status(200).json('profile updated')   
    } catch (error) {
        console.log(error)
        res.status(400).send(error?.message||'something went wrong')
    }
}

const getProfile=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let cart = await profilesDB.findOne({_id:id},{cart:0, address:0})
        res.status(200).json(cart)   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}

const updateCart=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let update_cart = await profilesDB.updateOne({_id:id},{$set:{cart:req.body}}) 
        res.status(200).json('cart updated')   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}

const getCart=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let cart = await profilesDB.findOne({_id:id},{cart:1})
        res.status(200).send(cart)   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}


const updateAddress=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let update_cart = await profilesDB.updateOne({_id:id},{$set:{address:req.body}}) 
        res.status(200).json('address updated')   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}

const getAddress=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let cart = await profilesDB.findOne({_id:id},{address:1})
        res.status(200).json(cart)   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}


const updatePayment=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let update_cart = await profilesDB.updateOne({_id:id},{$set:{payment:req.body}}) 
        res.status(200).json('payment updated')   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}

const getPayment=async(req, res)=>{
    const {id} = req.params
    const existingUser  = await profilesDB.findOne({_id:id});
    if (!existingUser) {
        return res.status(404).json({ message: 'No User Found' });
    }
    try {
        let cart = await profilesDB.findOne({_id:id},{payment:1})
        res.status(200).json(cart)   
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }
}

module.exports = {signup, signin, updateCart, getCart, updateAddress, getAddress, updatePayment, getPayment, updateProfile, getProfile}




// user create payload
// {df
//     "name": "lakhan",
//     "password": "12345",
//     "phone": "+917272737373",
//     "email": "lakhan@gmail.com"
// }


//cart
// [
//     {
//         "item": "burger",
//         "prize": "123",
//         "qty": 10
//     }
// ]

