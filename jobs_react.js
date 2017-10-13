



var Jobs = React.createClass({
	

	renderAll:function() {
		const data = this.props.data;

				const jobList = data.map(job=>{

					return(
							<a className="job_link_a" href={job.href}><div className="job_container">
								<div className="job_text">
									<p className="job_title">{job.title}</p>
									
									<p className="job_sallary">{job.sallary}</p>
									<p className="job_location">{job.location}</p>
								</div>

								<div className="job_image_container">
									<p className="job_date">{job.date}</p>
									<img className="job_image" src={job.pic}/>

								</div>
							</div></a>
							
							)
					});
				return jobList;
	},

	render:function () {
		
		return (
			<div>{this.renderAll()}</div>
			)
		}

});

$(function () {
	for (var i = 0; i < Jobs_Array.length; i++){
	console.log(i);
}
	$(".job_count").text( i+ " found");
});




var Jobs_Array =[
   
   {
   	key:'1',
   	title:"UX/UI designer",
   	sallary:"1200 to 1500 BGN",
   	location:"Plovdiv",
   	date:"Posted Today",
   	pic:"images/cl1.jpg",
   	href:""
	},
	{
   	key:'2',
   	title:"PHP developer",
   	sallary:"1600 to 2200 BGN",
   	location:"Sofia",
   	date:"11.02.2017",
   	pic:"images/cl2.jpg",
   	href:""
	},
	{
   	key:'3',
   	title:"Customer Support Representative - French / German",
   	sallary:"",
   	location:"Plovdiv",
   	date:"09.02.2017",
   	pic:"images/cl3.jpg",
   	href:""
	} 
	,
	{
   	key:"4",
   	title:"Customer Support Representative - French / Spanish",
   	sallary:"",
   	location:"Plovdiv",
   	date:"09.02.2017",
   	pic:"images/cl6.jpg",
   	href:""
	},
	{
   	key:"5",
   	title:"Front End Web Developer ",
   	sallary:"",
   	location:"Varna",
   	date:"09.02.2017",
   	pic:"images/cl4.jpg",
   	href:""
	},
	{
   	key:"6",
   	title:"Senior C# Developer - Senior .Net Web Developer - Software Development",
   	sallary:"2500 to 4500 BGN",
   	location:"Sofia",
   	date:"08.02.2017",
   	pic:"images/cl3.jpg",
   	href:""
	},
	{
   	key:"7",
   	title:"Web Analyst",
   	sallary:"",
   	location:"Plovdiv",
   	date:"08.02.2017",
   	pic:"images/cl5.jpg",
   	href:""
	},
	{
   	key:"8",
   	title:"Web Developer - PHP/HTML/CSS - Central Manchester Agency",
   	sallary:"3000 to 4000 BNG",
   	location:"Sofia",
   	date:"07.02.2017",
   	pic:"images/cl4.jpg",
   	href:""
	},
	{
   	key:"9",
   	title:"Senior Marketing Executive",
   	sallary:"3200 to 4200 BNG",
   	location:"1400 to 1600 BGN",
   	date:"07.02.2017",
   	pic:"images/cl6.jpg",
   	href:""
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
   	href:""
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
   	href:""
	}
	,
	{
   	key:"14",
   	title:"Web Developer - Magento, PHP",
   	sallary:"1400 to 2500 BGN",
   	location:"Plovdiv",
   	date:"06.02.2017",
   	pic:"images/cl5.jpg",
   	href:""
	}
	,
	{
   	key:"15",
   	title:"Graduate Web Developer",
   	sallary:"1200 to 1500 BGN",
   	location:"Sofia",
   	date:"05.02.2017",
   	pic:"images/cl5.jpg",
   	href:""
	}
	,
	{
   	key:"16",
   	title:"Front end Web Developer",
   	sallary:"1200 to 1500 BGN",
   	location:"Plovdiv",
   	date:"05.02.2017",
   	pic:"images/cl4.jpg",
   	href:""
	}
	,
	{
   	key:"17",
   	title:".Net Web Developer",
   	sallary:"1200 to 1500 BGN",
   	location:"Plovdiv",
   	date:"04.02.2017",
   	pic:"images/cl4.jpg",
   	href:""
	}



];







ReactDOM.render( <Jobs data={Jobs_Array}/> , document.getElementById('jobs_react'));

