"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_rpc_node_1 = require("pip-services-rpc-node");
class RoleAuthManager {
    userInRoles(roles) {
        return (req, res, next) => {
            let user = req.user;
            if (user == null) {
                pip_services_rpc_node_1.HttpResponseSender.sendError(req, res, new pip_services_commons_node_1.UnauthorizedException(null, 'NOT_SIGNED', 'User must be signed in to perform this operation').withStatus(401));
            }
            else {
                let authorized = false;
                for (let role of roles)
                    authorized = authorized || _.includes(user.roles, role);
                if (!authorized) {
                    pip_services_rpc_node_1.HttpResponseSender.sendError(req, res, new pip_services_commons_node_1.UnauthorizedException(null, 'NOT_IN_ROLE', 'User must be ' + roles.join(' or ') + ' to perform this operation').withDetails('roles', roles).withStatus(403));
                }
                else {
                    next();
                }
            }
        };
    }
    userInRole(role) {
        return this.userInRoles([role]);
    }
    admin() {
        return this.userInRole('admin');
    }
}
exports.RoleAuthManager = RoleAuthManager;
//# sourceMappingURL=RoleAuthManager.js.map