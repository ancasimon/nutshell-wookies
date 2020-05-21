import firebase from 'firebase';
import moment from 'moment';
import crewData from '../../helpers/data/crewData';
import crewMember from '../crewMember/crewMember';
import crewModalForm from '../crewModalForm.js/crewModalForm';
import crewEdit from '../crewMemberEdit/crewMemberEdit';
import utils from '../../helpers/utils';

const removeCrew = (e) => {
  const crewId = e.target.closest('.crewDiv').id;
  console.error('crewId?', crewId);
  crewData.deleteCrew(crewId)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      buildCrewContainer();
    })
    .catch((err) => console.error('could not delete crew', err));
};

const makeCrewMember = (e) => {
  e.preventDefault();
  const newCrew = {
    firstName: $('#crew-firstName').val(),
    lastName: $('#crew-lastName').val(),
    age: $('#crew-age').val(),
    title: $('#crew-jobTitle').val(),
    imgUrl: $('#crew-imgUrl').val(),
    description: $('#crew-description').val(),
    gender: $('#crew-male:checked').val(),
    timestamp: moment().format(),
  };
  crewData.addNewCrew(newCrew)
    .then(() => {
      $('#modalBodyAddCrew input').val('');
      $('#modalAddCrew').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildCrewContainer();
    })
    .catch((error) => console.error('could not add a new crew', error));
};

const editCrewEvent = (e) => {
  e.preventDefault();
  const crewId = e.target.closest('.crewCard').id;
  $('#modalEditCrew').modal('show');
  crewEdit.showEditCrewForm(crewId);
};

const updateCrew = (e) => {
  e.preventDefault();
  const crewId = $('.edit-crew-form-tag').data('id');
  const editedCrew = {
    firstName: $('#edit-crew-firstName').val(),
    lastName: $('#edit-crew-lastName').val(),
    age: $('#edit-crew-age').val(),
    title: $('#edit-crew-jobTitle').val(),
    imgUrl: $('#edit-crew-imgUrl').val(),
    description: $('#edit-crew-description').val(),
    gender: $('#edit-crew-male:checked').val(),
    timestamp: moment().format(),
  };
  crewData.updateCrew(crewId, editedCrew)
    .then(() => {
      $('#modalEditCrew').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildCrewContainer();
    })
    .catch((error) => console.error('could not update the crew', error));
};

const buildCrewContainer = () => {
  crewData.getAllCrew()
    .then((crewMembers) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<div class="row">';
      domString += '<h1 class="col-8 headingDisplay softEmboss"><p class="typewriter">Crew Members</p></h1>';
      const user = firebase.auth().currentUser;
      if (user != null) {
        domString += '<button id="button-add-crew" type="button" class="btn-default btn-lg crudButtonColor glowing mt-5 col-2" data-toggle="modal" data-target="#modalAddCrew"><i class="fas fa-calendar-plus"></i></button>';
      }
      domString += '</div>';
      domString += '<div class="d-flex flex-column">';
      crewMembers.forEach((item) => {
        // domString += '<div class="">';
        domString += crewMember.crewBuilder(item);
        // domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('crew', domString);
    })
    .catch((error) => console.error('get crew broke', error));
};

const crewEvents = () => {
  $('body').on('click', '.delete-crew', removeCrew);
  $('body').on('click', '#button-add-crew', crewModalForm.showAddCrewModalForm);
  $('body').on('click', '.edit-crew', editCrewEvent);
  $('body').on('click', '#button-save-crew', makeCrewMember);
  $('body').on('click', '#button-save-edit-crew', updateCrew);
};

export default { buildCrewContainer, crewEvents, editCrewEvent };
