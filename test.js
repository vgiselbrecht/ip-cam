tinyMCEPopup.requireLangPack();
var LinkDialog={
    preInit:function(){
        var e;
        (e=tinyMCEPopup.getParam("external_link_list_url"))&&document.write('<script language="javascript" type="text/javascript" src="'+tinyMCEPopup.editor.documentBaseURI.toAbsolute(e)+'"></script>')
        },
    init:function(){
        var t=document.forms[0],n=tinyMCEPopup.editor;
        document.getElementById("hrefbrowsercontainer").innerHTML=this.getBrowserHTML("hrefbrowser","href","page","theme_advanced_link"),isVisible("hrefbrowser")&&(document.getElementById("href").style.width="152px"),this.fillFileList("link_list","tinyMCELinkList"),this.fillRelList("rel_list"),this.fillTargetList("target_list"),this.fillClassList("class_list");
        if(e=n.dom.getParent(n.selection.getNode(),"A"))t.href.value=n.dom.getAttrib(e,"href"),t.linktitle.value=n.dom.getAttrib(e,"title"),t.insert.value=n.getLang("update"),selectByValue(t,"link_list",t.href.value),selectByValue(t,"target_list",n.dom.getAttrib(e,"target")),selectByValue(t,"rel_list",n.dom.getAttrib(e,"rel"),!0),selectByValue(t,"class_list",n.dom.getAttrib(e,"class"),!0);
        TinyMCE_EditableSelects.init()
        },
    update:function(){
        var e=document.forms[0],t=tinyMCEPopup.editor,n,r,i=e.href.value.replace(/ /g,"%20");
        tinyMCEPopup.restoreSelection(),n=t.dom.getParent(t.selection.getNode(),"A");
        if(!e.href.value&&n){
            r=t.selection.getBookmark(),t.dom.remove(n,1),t.selection.moveToBookmark(r),tinyMCEPopup.execCommand("mceEndUndoLevel"),tinyMCEPopup.close();
            return
        }
        if(n==null){
            t.getDoc().execCommand("unlink",!1,null),tinyMCEPopup.execCommand("mceInsertLink",!1,"#mce_temp_url#",{
                skip_undo:1
            });
            var s=this;
            tinymce.each(t.dom.select("a"),function(r){
                t.dom.getAttrib(r,"href")=="#mce_temp_url#"&&(n=r,t.dom.setAttribs(n,{
                    href:i,
                    title:e.linktitle.value,
                    target:e.target_list?getSelectValue(e,"target_list"):null,
                    rel:e.rel_list?getSelectValue(e,"rel_list"):null,
                    "class":e.class_list?getSelectValue(e,"class_list"):null
                    }),s.fixIssues(t,n,e))
                })
            }else t.dom.setAttribs(n,{
            href:i,
            title:e.linktitle.value,
            target:e.target_list?getSelectValue(e,"target_list"):null,
            rel:e.rel_list?getSelectValue(e,"rel_list"):null,
            "class":e.class_list?getSelectValue(e,"class_list"):null
            }),this.fixIssues(t,n,e);
        if(n.childNodes.length!=1||n.firstChild.nodeName!="IMG")t.focus(),t.selection.select(n),t.selection.collapse(0),tinyMCEPopup.storeSelection();
        tinyMCEPopup.execCommand("mceEndUndoLevel"),tinyMCEPopup.close()
        },
    fixIssues:function(e,t,n){
        n.href.value+"/"==e.settings.document_base_url&&(n.href.value+="/"),n.href.value==e.settings.document_base_url&&t.setAttribute("mce_href",n.href.value),(n.href.value=="/"||n.href.value=="")&&e.dom.setAttrib(t,"href","./")
        },
    checkPrefix:function(e){
        e.value&&Validator.isEmail(e)&&!/^\s*mailto:/i.test(e.value)&&confirm(tinyMCEPopup.getLang("typolinks_dlg.link_is_email"))&&(e.value="mailto:"+e.value),/^\s*www\./i.test(e.value)&&confirm(tinyMCEPopup.getLang("typolinks_dlg.link_is_external"))&&(e.value="http://"+e.value),e.value&&/^#/.test(e.value)&&(e.value="{{env::request}}"+e.value)
        },
    fillFileList:function(e,t){
        var n=tinyMCEPopup.dom,r=n.get(e),i,s;
        t=window[t],t&&t.length>0?(r.options[r.options.length]=new Option("",""),tinymce.each(t,function(e){
            r.options[r.options.length]=new Option(e[0],e[1])
            })):n.remove(n.getParent(e,"tr"))
        },
    fillRelList:function(e){
        var t=tinyMCEPopup.dom,n=t.get(e),r;
        n.options[n.options.length]=new Option(tinyMCEPopup.getLang("not_set"),""),n.options[n.options.length]=new Option(tinyMCEPopup.getLang("typolinks_dlg.image_rel_single"),"lightbox"),n.options[n.options.length]=new Option(tinyMCEPopup.getLang("typolinks_dlg.image_rel_multi"),"lightbox[multi]")
        },
    fillTargetList:function(e){
        var t=tinyMCEPopup.dom,n=t.get(e),r;
        n.options[n.options.length]=new Option(tinyMCEPopup.getLang("not_set"),""),n.options[n.options.length]=new Option(tinyMCEPopup.getLang("typolinks_dlg.link_target_blank"),"_blank"),(r=tinyMCEPopup.getParam("theme_advanced_link_targets"))&&tinymce.each(r.split(","),function(e){
            e=e.split("="),n.options[n.options.length]=new Option(e[0],e[1])
            })
        },
    fillClassList:function(e){
        var t=tinyMCEPopup.dom,n=t.get(e),r,i;
        (r=tinyMCEPopup.getParam("theme_advanced_styles"))?(i=[],tinymce.each(r.split(";"),function(e){
            var t=e.split("=");
            i.push({
                title:t[0],
                "class":t[1]
                })
            })):i=tinyMCEPopup.editor.dom.getClasses(),n.options[n.options.length]=new Option(tinyMCEPopup.getLang("not_set"),""),i.length>0&&tinymce.each(i,function(e){
            n.options[n.options.length]=new Option(e.title||e["class"],e["class"])
            })
        },
    getBrowserHTML:function(e,t,n,r){
        var i=r+"_"+n+"_browser_callback",s,o;
        return s=tinyMCEPopup.getParam(i,tinyMCEPopup.getParam("file_browser_callback")),s?(o="",o+='<a id="'+e+'_link" href="javascript:openBrowser(\''+e+"','"+t+"', '"+n+"','"+i+'\');" onmousedown="return false;" class="browse">',o+='<span id="'+e+'" title="'+tinyMCEPopup.getLang("browse")+'">&nbsp;</span></a>',e="srcbrowser",o+='<a id="'+e+'_link" href="javascript:openBrowser(\''+e+"','"+t+"', 'image','"+i+'\');" onmousedown="return false;" class="browse">',o+='<span id="'+e+'" title="'+tinyMCEPopup.getLang("browse")+'">&nbsp;</span></a>',o):""
        }
    };

LinkDialog.preInit(),tinyMCEPopup.onInit.add(LinkDialog.init,LinkDialog);
