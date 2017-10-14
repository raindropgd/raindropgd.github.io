var Jobs_Array =[
   
   {
      key:'1',
      title:"UX/UI designer",
      sallary:"1200 to 1500 BGN",
      location:"Plovdiv",
      date:"Posted Today",
      pic:"images/cl1.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:'2',
      title:"PHP developer",
      sallary:"1600 to 2200 BGN",
      location:"Sofia",
      date:"11.02.2017",
      pic:"images/cl2.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:'3',
      title:"Customer Support Representative - French / German",
      sallary:"",
      location:"Plovdiv",
      date:"09.02.2017",
      pic:"images/cl3.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   } 
   ,
   {
      key:"4",
      title:"Customer Support Representative - French / Spanish",
      sallary:"",
      location:"Plovdiv",
      date:"09.02.2017",
      pic:"images/cl6.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:"5",
      title:"Front End Web Developer ",
      sallary:"",
      location:"Varna",
      date:"09.02.2017",
      pic:"images/cl4.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:"6",
      title:"Senior C# Developer - Senior .Net Web Developer - Software Development",
      sallary:"2500 to 4500 BGN",
      location:"Sofia",
      date:"08.02.2017",
      pic:"images/cl3.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:"7",
      title:"Web Analyst",
      sallary:"",
      location:"Plovdiv",
      date:"08.02.2017",
      pic:"images/cl5.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:"8",
      title:"Web Developer - PHP/HTML/CSS - Central Manchester Agency",
      sallary:"3000 to 4000 BNG",
      location:"Sofia",
      date:"07.02.2017",
      pic:"images/cl4.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:"9",
      title:"Senior Marketing Executive",
      sallary:"3200 to 4200 BNG",
      location:"1400 to 1600 BGN",
      date:"07.02.2017",
      pic:"images/cl6.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   },
   {
      key:"10",
      title:"Middleweight Web Developer / PHP Developer / SQL Developer",
      sallary:"2200 to 2500 BGN",
      location:"Sofia",
      date:"07.02.2017",
      pic:"images/cl6.jpg"
   }
   ,
   {
      key:"11",
      title:"C#/ASP.NET MVC Web Developer",
      sallary:"1400 to 1700 BGN",
      location:"Plovdiv",
      date:"07.02.2017",
      pic:"images/cl6.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   }
   ,
   {
      key:"12",
      title:"Graduate Web Developer - .Net / C# / ASP.Net",
      sallary:"1600 to 1800 BGN",
      location:"Plovdiv",
      date:"07.02.2017",
      pic:"images/cl4.jpg"
   }
   ,
   {
      key:"13",
      title:"Senior Java Developer (WEB)",
      sallary:"1200 to 1500 BGN",
      location:"Sofia",
      date:"06.02.2017",
      pic:"images/cl5.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   }
   ,
   {
      key:"14",
      title:"Web Developer - Magento, PHP",
      sallary:"1400 to 2500 BGN",
      location:"Plovdiv",
      date:"06.02.2017",
      pic:"images/cl5.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   }
   ,
   {
      key:"15",
      title:"Graduate Web Developer",
      sallary:"1200 to 1500 BGN",
      location:"Sofia",
      date:"05.02.2017",
      pic:"images/cl5.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   }
   ,
   {
      key:"16",
      title:"Front end Web Developer",
      sallary:"1200 to 1500 BGN",
      location:"Plovdiv",
      date:"05.02.2017",
      pic:"images/cl4.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   }
   ,
   {
      key:"17",
      title:".Net Web Developer",
      sallary:"1200 to 1500 BGN",
      location:"Plovdiv",
      date:"04.02.2017",
      pic:"images/cl4.jpg",
      time:"",
      seen:"",
      language:"",
      description:"",
      requ:"",
      weoffer:""
   }



];


$(function () {
   for (var i = 0; i < Jobs_Array.length; i++){
   console.log(i);
}
   $(".job_count").text( i+ " found");
   $(".all_job_container a").click(function(event) {
      
      var targetID = $(this).attr('data-id');
      var targetID_number = parseInt(targetID.substring(4));
      /*the index(key) of the element*/
      var selected_job = Jobs_Array[targetID_number-1];
       console.log(selected_job.key +"  "+selected_job.title);
       $(".all_job_container").hide(); 
$(".single_job_container ").show(); 
   });
$("#return_to_jobs").click(function () {
  $(".all_job_container").show(); 
$(".single_job_container ").hide(); 
});





});







var JobsList = React.createClass({
	

 
  
   
	renderAll:function() {
		const data = this.props.data;

				const jobList = data.map(job=>{

					return(
							<a 
                         className="job_link_a" data-id={"job_"+job.key} key={job.key}><div className="job_container">
   								<div className="job_text">
   									<p className="job_title">{job.title}</p>
   									
   									<p className="job_sallary">{job.sallary}</p>
   									<p className="job_location">{job.location}</p>
   								</div>

   								<div className="job_image_container">
   									<p className="job_date">{job.date}</p>
   									<img className="job_image" src={job.pic}/>

   								</div>
   							</div>
                     </a>
							
							)
					});
				return jobList;
	},
   render:function () {
		
		return (
         <div>
            <div className="main_page_title_container">
               <p className="main_page_title job_title_page">Jobs</p>
               <p className="job_count"></p>  
            </div>
            <div className="loader_conateiner"><div className="pre_loader"></div></div>

            <div className="all_job_container">
               <div>{this.renderAll()}</div>
            </div>
            <div className="single_job_container">

               <div className="single_job_wraper">
               <button className="" id="return_to_jobs">Return</button>
                  <div className=""><img src="" className=""/> </div>
                  <p className=""></p>
                  <div className="">
                     <p className="">Seen: </p>
                     <p className="">Place: </p>
                     <p className="">Time: </p>
                     <p className="">Sallary: </p>
                     <p className="">Languages: </p>
                  </div>
                  <hr className=""/>
                  <div className="">
                     <p className="">Description:</p>
                        <p className=""></p>
                      <p className="">Recuerments:</p>
                        <p className=""></p>
                      <p className="">We Offer:</p>
                        <p className=""></p>

                  </div>
                  <div className="">
                     <button className="">Apply</button>
                     
                  </div>
                
                  
                 

               </div>
            </div>

         </div>
			
			)
		}

});



ReactDOM.render( <JobsList data={Jobs_Array}/> , document.getElementById('jobs_react'));

