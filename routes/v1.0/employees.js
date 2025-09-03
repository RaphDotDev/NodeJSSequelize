const BaseRouter = require("../../utils/BaseRouter.js")
const Controller = require('../../controllers/employees.controller.js')
const EmployeesController = require("../../controllers/employees.controller.js")

module.exports = class EmployeesRouter extends BaseRouter {

	constructor(){
		super(new EmployeesController())
	}
	
	/**
	 * @description anything
	 */

	getAdditionalMapping = () => {
		let mappings = [
			{
				method: 'get',
				path:'/getEmployees',
				function: 'getEmployees'
			}
		]
		return mappings
	}
}