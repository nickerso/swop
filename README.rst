
==========================
Semantics with our Plugins
==========================

Semantics with our Plugins is the concept of using semantic web technologies to describe our software plugins in order to make them discoverable and reusable. Currently this repository contains a web application for searching, discovering, and annotating plugins used in `MAP Client <https://map-client.readthedocs.io>`_ and our CTK-based applications.

Access
------
Interested users can access a live installation at http://sites.bioeng.auckland.ac.nz/swop/

Important
---------
The javascript at the installation accesses the rest-api of PMR hosted at https://models.physiomeproject.org/. This is a different domain and most browsers do not allow cross-domain access. Google Chrome users can install the "Allow-Control-Allow-Origin: \*" extension and enable cross-domain access.
Below is the landing page on Google Chrome. Note the "Allow-Control-Allow-Origin: \*" extension has been installed and cross domain access has been enabled (this is shown by the green icon, highlighted by the red circle in the image).

.. image:: https://raw.githubusercontent.com/ABI-Software/swop/master/images/landingPage.png

Plugin Search
-------------
The landing page provides a search wizard. Users can search for plugins using
    \* partial text search on plugin titles and descriptions,

    \* Plugin type,

    \* User interface, and

    \* License types.

Results
-------
A summary of the plugins that match the query are listed as table below the wizard. 

.. image:: https://raw.githubusercontent.com/ABI-Software/swop/master/images/results1.png

Clicking on a row will show a popup which contains the associated description and either the PMR workspace or url from which more information regarding the plugin can be obtained.

.. image:: https://raw.githubusercontent.com/ABI-Software/swop/master/images/results2.png

Annotating new plugins
----------------------
Users can also annotate new plugins to be deposited in the repository, using the 'RDF for a new plugin can be created here' link on the landing page. The`Annotate new plugins  <http://sites.bioeng.auckland.ac.nz/swop/pmrpluginannotate.html>`_ page provides a structured input wizard, which can be used to input information regarding the plugin. The page can then be used to generate a valid RDF. Users can then upload the RDF along with the plugin to PMR. PMR automatically detects and parses the annotation and indexes it for future queries.

.. image:: https://raw.githubusercontent.com/ABI-Software/swop/master/images/AnnotatePlugin_Page_1.png
.. image:: https://raw.githubusercontent.com/ABI-Software/swop/master/images/AnnotatePlugin_Page_2.png

============
Installation
============

Private installations requires copying the `pluginsearch.html <https://github.com/ABI-Software/swop/blob/master/pluginsearch.html>`_ and `pluginannotate.html <https://github.com/ABI-Software/swop/blob/master/pluginannotate.html>`_ to the target landing point and updating the PMR url in `pluginsearch.html <https://github.com/ABI-Software/swop/blob/master/pluginsearch.html>`_'s javascript.
