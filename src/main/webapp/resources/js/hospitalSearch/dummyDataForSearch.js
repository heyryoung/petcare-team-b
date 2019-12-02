"use strict"
class Dummy {
	constructor() {
		this.init();
	}
	init () {
		this.eventsTrigger();
	}
	eventsTrigger() {
		let contents = '<div> <h6>사용 방법</h6>'+
			'<ul><li> hospital, hos_info , hos_info_code, juso, review 테이블을 만들어 둔다.</li>'+
			'<li> hos_info_code, juso 테이블에 스크립트를 사용하여 데이터를 입력해 둔다. (search page로딩에 필요)</li>'+
			'<li> 하단의 버튼을 누르면 hospital 과 hos_info 테이블에 데이터가 입력된다.</li>'+
			'</ul>'+
			'</div><hr/>'
			
		$(contents)
		.appendTo("#contents") 		
		
	 	$('<button>',{
			text :'Create Dummy Data For Search' , 
			href: '#' ,
			style:'margin-left:10px; margin-left:10px;'
		})
		.addClass('btn btn-default')
		.appendTo("#contents")     
		.click(e=>{
			e.preventDefault()
			$.ajax({
				url : '/sch/crawling',
				type : 'GET',
				contentType : 'application/json', 
				success : d =>{
					alert('게시 성공  ' + d.msg);
				},
				error : e =>{
					alert('게시 실패');
				}
			})  	
		})   
		
	}
	
}

(function() {
		new Dummy()
})();