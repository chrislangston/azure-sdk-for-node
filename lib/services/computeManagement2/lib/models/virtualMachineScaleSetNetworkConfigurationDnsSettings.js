/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Describes a virtual machines scale sets network configuration's DNS
 * settings.
 *
 */
class VirtualMachineScaleSetNetworkConfigurationDnsSettings {
  /**
   * Create a VirtualMachineScaleSetNetworkConfigurationDnsSettings.
   * @member {array} [dnsServers] List of DNS servers IP addresses
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetNetworkConfigurationDnsSettings
   *
   * @returns {object} metadata of VirtualMachineScaleSetNetworkConfigurationDnsSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetNetworkConfigurationDnsSettings',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetNetworkConfigurationDnsSettings',
        modelProperties: {
          dnsServers: {
            required: false,
            serializedName: 'dnsServers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSetNetworkConfigurationDnsSettings;