window.onload = function () {
	var type = this.document.getElementById("type")
	
	type.onmouseenter = function () {
		type.style.fontWeight="bold"
	}
	
	type.onmouseenter = function () {
		type .style.fontWeight="normal"
	}
	
	var search = this.document.getElementById("search")
	var lists = new this.Array("百度","360搜索","谷歌","必应","哔哩哔哩","知乎")
	var colors = new this.Array("royalblue","forestgreen","dodgerblue","chocolate","hotpink","cornflower")
	var index = 0
	
	type.onclick = function () {
		if(index<lists.length-1&&index<colors.length){
			index++
		}else{
			index=0
		}
		type.innerText = lists[index]
		type.style.color = colors[index]
		search.style.color = colors[index]
	}
	
	search.onmouseenter = function () {
		search.style.backgroundColor = "#eeeeee"
	}
	
	search.onmouseenter = function () {
		search.style.backgroundColor = "#white"
	}
	
	search.onclick = function () {
    GoResult()
	}
	
	var content = this.document.getElementById("content")
	
	function GoResult() {
		switch (index) { 
			case 0:
				window.location.href = "https://www.baidu.com/s?wd=" + content.value
				break
			case 1:
				window.location.href = "https://www.so.com/s?q=" + content.value
				break
			case 2:
				window.location.href = "https://www.google.com/search?q=" + content.value
				break
			case 3:
				window.location.href = "https://www.cn.bing.com/search?q=" + content.value
				break
			case 4:
				window.location.href = "https://search.bilibili.com/all?keyword=" + content.value
				break
			case 5:
				window.location.href = "https://www.zhihu.com/search?q=" + content.value
				break	
	}
  }
	content.onkeypress = function(){
		if (event.keyCode == 13) {
			GoResult()
		}
	}
}