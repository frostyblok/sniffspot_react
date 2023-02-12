import Rater from "react-rater";

function Comment({ comment }) {
    const { rating, content } = comment;
   return (
       <div className="row bg-white p-3 shadow mb-3">
           <div className="col-5 col-sm-2">
               <div
                   className="w-75 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center p-3">
                   <h4 className="">A</h4>
               </div>
           </div>
           <div className="col-12 col-sm-10 px-0">
               <div className="row">
                   <div className="col-12 col-sm-9">
                       <div className="my-3 my-sm-0">
									<span>
										<span className="mr-3">Jason Mamoa</span>
                                        <Rater rating={rating} total={5} interactive={false} />
									</span>
                       </div>
                   </div>
                   <div className="col-12 col-sm-3">
                       <div className="ml-sm-3">
                           <span className="text-muted">15 Oct'20</span>
                       </div>
                   </div>
               </div>
               <div className="mt-sm-2">{content}
                   <span id="demo" className="collapse">
                                        Most of the trainers are good. Support is awesome. We are getting response/resolution within 24 hours and sometime immediately. Course recording session available Course contacted in different timezone across the regions I strongly recommend to friends to take course with Edureka.
                                    </span>
                   <p className="text-muted" id="d-show" type="button"
                      data-toggle="collapse" data-target="#demo">Show More</p>
                   <p className="d-none text-muted" id="d-hide" type="button"
                      data-toggle="collapse" data-target="#demo">Show Less</p>
               </div>

           </div>
       </div>
   );
}

export default Comment;
