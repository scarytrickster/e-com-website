import jwt from 'jsonwebtoken'

const generateToken = (res,userId) =>{
    const token = jwt.sign({id :userId},process.env.JWT_SECRET,{expiresIn: '30d'});
    
        res.cookie('jwt',token, {
          httpOnly : true,//GET PUT POST REQUEST
          secure: process.env.NODE_ENV !== 'development',
          sameSite : 'strict',
          maxAge: 30*60*60*1000,//24hrs*60min*60sec*1000milisec
        })
};

export default generateToken;