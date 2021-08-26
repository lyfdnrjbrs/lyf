$(function () {
    $(".main .left .table-li ul li").click(function () {
        $(this).toggleClass("on").siblings().removeClass("on");
    })
    $(".td-f").on("change", "input[type='file']", function () {
        var filePath = $(this).val();
        if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1 ||
            filePath.indexOf("jpeg") != -1 || filePath.indexOf("doc") != -1 ||
            filePath.indexOf("docx") != -1 || filePath.indexOf("ppt") != -1 ||
            filePath.indexOf("pptx") != -1 || filePath.indexOf("zip") != -1 ||
            filePath.indexOf("rar") != -1 || filePath.indexOf("pdf") != -1 ||
            filePath.indexOf("xls") != -1) {
            var arr = filePath.split('\\');
            var fileName = arr[arr.length - 1];
            $(".txt-file").val(fileName);
        } else {
            $(".txt-file").val("");
            alert("您未上传文件，或者您上传文件格式不支持，您上传的文件格式不支持，仅支持jpg,jpeg,png,doc,docx,ppt,pptx,zip,rar,pdf,xls！");
        }
    })
})