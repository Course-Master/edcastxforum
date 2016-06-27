"""TO-DO: Write a description of what this XBlock is."""
import urllib
import pkg_resources
from django.conf import settings
from xblock.core import XBlock
from xblock.fields import Scope, Integer
from xblock.fragment import Fragment


class EdcastXForumXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """

    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.
    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # TO-DO: change this view to display your data your own way.
    def student_view(self, context=None):
        """
        The primary view of the EdcastXForumXBlock, shown to students
        when viewing courses.
        """
        js_vals = {
        "course_id": self.course_id.to_deprecated_string(),
        "course_url": urllib.quote(self.course_id.to_deprecated_string())
	   }
        html = self.resource_string("static/html/edcastxforum.html")
        frag = Fragment(html.format(self=js_vals))
        frag.add_css(self.resource_string("static/css/edcastxforum.css"))
        frag.add_javascript(self.resource_string("static/js/src/edcastxforum.js"))
        frag.initialize_js('EdcastXForumXBlock', js_vals)
        return frag
        
    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("EdcastXForumXBlock",
             """<edcastxforum/>
             """),
            ("Multiple EdcastXForumXBlock",
             """<vertical_demo>
                <edcastxforum/>
                <edcastxforum/>
                <edcastxforum/>
                </vertical_demo>
             """),
        ]
