<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Dokumente extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index() {
        redirect('#dokumente');
    }
    
    function ajax($fn) {
        if (!IS_AJAX) $this->index();
        echo json_encode(call_user_func(array($this, '_' . $fn)));
    }
    
    function _get_categories() {
        return array(
            'data' => array(
                array('id' => 1, 'title' => 'Für Alle', 'teaser' => 'Zum Herunterladen: Broschüren, Ausbildungsverträge, Merkblätter, Kosten...'),
                array('id' => 2, 'title' => 'Satzungen der DHBW', 'teaser' => 'Die amtlichen Bekanntmachungen der DHBW: Grund- , Zulassungs-, Studien- und Prüfungsordnung u.v.m.'),
                array('id' => 3, 'title' => 'Studieninteressenten', 'teaser' => 'Downloads rund ums Studium: Kosten, Merkblätter, Zulassungsvoraussetzungen'),
                array('id' => 4, 'title' => 'Studierende', 'teaser' => 'Material, das Ihnen das Leben leichter macht: Merkblätter, Antragsformulare, Hinweise für den Studienbetrieb usw.'),
                array('id' => 5, 'title' => 'Lehrbeauftragte', 'teaser' => 'Richtlinien für Klausuren, Nutzungshinweise für die EDV-Ausstattung, Material zur Evaluation der Lehre'),
                array('id' => 6, 'title' => 'Interessierte Firmen und Ausbildungspartner', 'teaser' => 'Vordrucke und Informationen über juristische Details der DHBW-Ausbildung, Grundsätze zur Eignung von Firmen usw.'),
            )
        );
    }
}