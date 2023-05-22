
export const testFunction= async (req,res)=>{
    try {
        return res.status(200).json({
            success:true,
            message:"Test Function is Working"
        })
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:error
        })
    }
}