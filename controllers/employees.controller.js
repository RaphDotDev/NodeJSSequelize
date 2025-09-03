const {Employees} = require('../models')
const BaseController = require('../utils/BaseContoller')

module.exports = class EmployeesController extends BaseController{

	constructor(){
		super(Employees);
	}

	async getEmployees() {
		const Employees = await Employees.findAll()
		console.log('The emplopyees I got', Employees)
		return this.createResponse(Employees)
	}
}