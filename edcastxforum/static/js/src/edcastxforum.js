/* Javascript for EdcastXForumXBlock. */
function EdcastXForumXBlock(runtime, element) {
    $(function ($) {
        /* Here's where you'd do things on page load. */
        var msg = {event: "parent.geturl", data: 'test-data'}
        parent.postMessage(JSON.stringify(msg), '*');
        window.addEventListener('message', function(event) {
		var event_data = JSON.parse(event.data);
		if (event_data.event == 'child.geturl'){
            var loc = window.location['pathname'];
        	var location_id = loc.replace(/^\/|\/$/g, '').split("/courseware/")[1].replace("/","-")
        	var block_id = $('.seq_other.active').attr('data-edcast-unit-id');
        	var context_id = location_id.concat('-').concat(block_id);
        	var elem = document.getElementById('DESTINY_FORUM');
        	var context_label = window.EDCAST_CONTEXT.section.name + " > " 
			+ window.EDCAST_CONTEXT.subsection.name + " > " 
			+ $('.seq_other.active').attr('data-edcast-unit-name');
        	var url = event_data.data + "/xforums/?course_offering_id="
            		+ data['course_url'] + "&context_id="
            		+ context_id + "&context_label="
            		+ encodeURIComponent(context_label);
        	var script_tag = document.createElement('script');
        script_tag.src = url;
        document.body.appendChild(script_tag);
		}
	});
    });
}
