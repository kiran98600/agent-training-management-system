'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agents',
      {
        uuid: {
          type: 'varchar(36)',
          unique: true,
          allowNull: false
        },
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        full_name: {
          type: Sequelize.STRING(250),
        },
        dob: {
          type: Sequelize.STRING(50),
        },
        gender: {
          type: Sequelize.STRING(50),
        },
        fathers_name: {
          type: Sequelize.STRING(250),
        },
        province: {
          type: Sequelize.INTEGER,
        },
        district: {
          type: Sequelize.INTEGER,
        },
        municipality: {
          type: Sequelize.STRING(250),
        },
        is_fee_paid: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        is_certificate_ready: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        address_tol: {
          type: Sequelize.STRING(250),
        },
        address_ward_no: {
          type: Sequelize.STRING(250),
        },
        mobile_no: {
          type: Sequelize.STRING(15),
        },
        email: {
          type: Sequelize.STRING(250),
        },
        citizenship_no: {
          type: Sequelize.STRING(100),
        },
        citizenship_issue_date: {
          type: Sequelize.STRING(50),
        },
        education_qualification: {
          type: Sequelize.STRING(100),
        },
        faculty: {
          type: Sequelize.STRING(100),
        },
        current_occupation: {
          type: Sequelize.STRING(150),
        },
        pan_no: {
          type: Sequelize.STRING(35),
        },
        bank_account_number: {
          type: Sequelize.STRING(50),
        },
        bank_name: {
          type: Sequelize.STRING(100),
        },
        referring_staff_code: {
          type: Sequelize.STRING(100),
        },
        referring_staff_name: {
          type: Sequelize.STRING(250),
        },
        pp_photo: {
          type: Sequelize.STRING(150),
        },
        citizen: {
          type: Sequelize.STRING(150),
        },
        academic_marksheet: {
          type: Sequelize.STRING(150),
        },
        character_marksheet: {
          type: Sequelize.STRING(150),
        },
        training_id: {
          type: Sequelize.BIGINT
        },
        status: Sequelize.INTEGER,
        is_blocked: Sequelize.BOOLEAN,
        is_deleted: Sequelize.BOOLEAN,
        created_by: Sequelize.INTEGER,
        created_date: Sequelize.BIGINT,
        updated_by: Sequelize.INTEGER,
        updated_date: Sequelize.BIGINT
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('agents');
  }
};
