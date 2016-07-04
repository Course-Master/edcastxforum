/* Javascript for EdcastXForumXBlock. */
function EdcastXForumXBlock(runtime, element, data) {
    $(function ($) {
        /* Here's where you'd do things on page load. */
        var msg = {event: "parent.geturl", data: 'test-data'}
        parent.postMessage(JSON.stringify(msg), '*');
        window.addEventListener('message', function(event) {
        var event_data = JSON.parse(event.data);
        if (event_data.event == 'child.geturl'){
            var context_id = window.EDCAST_CONTEXT.section.id + '-' 
                + window.EDCAST_CONTEXT.subsection.id + '-' 
                + window.EDCAST_CONTEXT.unit.id;
            var context_label = window.EDCAST_CONTEXT.section.name + " > " 
                + window.EDCAST_CONTEXT.subsection.name + " > "
                + window.EDCAST_CONTEXT.unit.name;
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