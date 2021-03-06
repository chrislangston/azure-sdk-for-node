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

const models = require('./index');

/**
 * A machine evaluated as part of an assessment.
 *
 * @extends models['BaseResource']
 */
class AssessedMachine extends models['BaseResource'] {
  /**
   * Create a AssessedMachine.
   * @member {string} [id] Path reference to this assessed machine.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName}
   * @member {string} [name] Name of the machine.
   * @member {string} [eTag] For optimistic concurrency control.
   * @member {string} [type] Type of the object =
   * [Microsoft.Migrate/projects/groups/assessments/assessedMachines].
   * @member {array} [groups] List of references to the groups that the machine
   * is member of.
   * @member {date} [discoveredTimestamp] Time when this machine was discovered
   * by Azure Migrate agent. Date-Time represented in ISO-8601 format.
   * @member {string} [bootType] Boot type of the machine. Possible values
   * include: 'Unknown', 'EFI', 'BIOS'
   * @member {string} [datacenterContainer] Container defined in the management
   * solution that this machine is part of in the datacenter.
   * @member {string} [datacenterManagementServer] Name of the server hosting
   * the datacenter management solution.
   * @member {string} [datacenterMachineId] ID of the machine as tracked by the
   * datacenter management solution.
   * @member {string} [datacenterManagementServerId] ID of the server hosting
   * the datacenter management solution.
   * @member {string} [description] Description of the machine
   * @member {string} [displayName] User readable name of the machine as
   * defined by the user in their private datacenter.
   * @member {number} [megabytesOfMemory] Memory in Megabytes.
   * @member {number} [numberOfCores] Processor count.
   * @member {string} [operatingSystem] Operating System of the machine.
   * @member {number} [monthlyBandwidthCost] Monthly network cost estimate for
   * the network adapters that are attached to this machine as a group, for a
   * 31-day month.
   * @member {number} [monthlyStorageCost] Monthly storage cost estimate for
   * the disks that are attached to this machine as a group, for a 31-day
   * month.
   * @member {object} [disks] Dictionary of disks attached to the machine. Key
   * is ID of disk. Value is a disk object.
   * @member {object} [networkAdapters] Dictionary of network adapters attached
   * to the machine. Key is name of the adapter. Value is a network adapter
   * object.
   * @member {string} [recommendedSize] Recommended Azure size for this
   * machine. Possible values include: 'Unknown', 'Basic_A0', 'Basic_A1',
   * 'Basic_A2', 'Basic_A3', 'Basic_A4', 'Standard_A0', 'Standard_A1',
   * 'Standard_A2', 'Standard_A3', 'Standard_A4', 'Standard_A5', 'Standard_A6',
   * 'Standard_A7', 'Standard_A8', 'Standard_A9', 'Standard_A10',
   * 'Standard_A11', 'Standard_A1_v2', 'Standard_A2_v2', 'Standard_A4_v2',
   * 'Standard_A8_v2', 'Standard_A2m_v2', 'Standard_A4m_v2', 'Standard_A8m_v2',
   * 'Standard_D1', 'Standard_D2', 'Standard_D3', 'Standard_D4',
   * 'Standard_D11', 'Standard_D12', 'Standard_D13', 'Standard_D14',
   * 'Standard_D1_v2', 'Standard_D2_v2', 'Standard_D3_v2', 'Standard_D4_v2',
   * 'Standard_D5_v2', 'Standard_D11_v2', 'Standard_D12_v2', 'Standard_D13_v2',
   * 'Standard_D14_v2', 'Standard_D15_v2', 'Standard_DS1', 'Standard_DS2',
   * 'Standard_DS3', 'Standard_DS4', 'Standard_DS11', 'Standard_DS12',
   * 'Standard_DS13', 'Standard_DS14', 'Standard_DS1_v2', 'Standard_DS2_v2',
   * 'Standard_DS3_v2', 'Standard_DS4_v2', 'Standard_DS5_v2',
   * 'Standard_DS11_v2', 'Standard_DS12_v2', 'Standard_DS13_v2',
   * 'Standard_DS14_v2', 'Standard_DS15_v2', 'Standard_F1', 'Standard_F2',
   * 'Standard_F4', 'Standard_F8', 'Standard_F16', 'Standard_F1s',
   * 'Standard_F2s', 'Standard_F4s', 'Standard_F8s', 'Standard_F16s',
   * 'Standard_G1', 'Standard_G2', 'Standard_G3', 'Standard_G4', 'Standard_G5',
   * 'Standard_GS1', 'Standard_GS2', 'Standard_GS3', 'Standard_GS4',
   * 'Standard_GS5', 'Standard_H8', 'Standard_H16', 'Standard_H8m',
   * 'Standard_H16m', 'Standard_H16r', 'Standard_H16mr', 'Standard_L4s',
   * 'Standard_L8s', 'Standard_L16s', 'Standard_L32s'
   * @member {number} [numberOfCoresForRecommendedSize] Number of CPU cores in
   * the Recommended Azure VM Size.
   * @member {number} [megabytesOfMemoryForRecommendedSize] Megabytes of memory
   * in the Recommended Azure VM Size.
   * @member {number} [monthlyComputeCostForRecommendedSize] Compute Cost for a
   * 31-day month, if the machine is migrated to Azure with the Recommended
   * Size.
   * @member {number} [percentageCoresUtilization] Utilization percentage of
   * the processor core as observed in the private data center, in the Time
   * Range selected on Assessment, reported as the Percentile value based on
   * the percentile number selected in assessment.
   * @member {number} [percentageMemoryUtilization] Utilization percentage of
   * the memory as observed in the private data center, in the Time Range
   * selected on Assessment, reported as the Percentile value based on the
   * percentile number selected in assessment.
   * @member {number} [percentageCoresUtilizationDataPointsExpected] Expected
   * data points for percentage of cores utilization.
   * @member {number} [percentageCoresUtilizationDataPointsReceived] Received
   * data points for percentage of cores utilization.
   * @member {number} [percentageMemoryUtilizationDataPointsExpected] Expected
   * data points for percentage of memory utilization.
   * @member {number} [percentageMemoryUtilizationDataPointsReceived] Received
   * data points for percentage of memory utilization.
   * @member {string} [suitability] Whether machine is suitable for migration
   * to Azure. Possible values include: 'Unknown', 'NotSuitable', 'Suitable',
   * 'ConditionallySuitable', 'ReadinessUnknown'
   * @member {string} [suitabilityExplanation] If machine is not ready to be
   * migrated, this explains the reasons and mitigation steps. Possible values
   * include: 'Unknown', 'NotApplicable',
   * 'GuestOperatingSystemArchitectureNotSupported',
   * 'GuestOperatingSystemNotSupported', 'BootTypeNotSupported',
   * 'MoreDisksThanSupported', 'NoSuitableVmSizeFound',
   * 'OneOrMoreDisksNotSuitable', 'OneOrMoreAdaptersNotSuitable',
   * 'InternalErrorOccuredDuringComputeEvaluation',
   * 'InternalErrorOccuredDuringStorageEvaluation',
   * 'InternalErrorOccuredDuringNetworkEvaluation',
   * 'NoVmSizeSupportsStoragePerformance',
   * 'NoVmSizeSupportsNetworkPerformance', 'NoVmSizeForSelectedPricingTier',
   * 'NoVmSizeForSelectedAzureLocation', 'CheckRedHatLinuxVersion',
   * 'CheckOpenSuseLinuxVersion', 'CheckWindowsServer2008R2Version',
   * 'CheckCentOsVersion', 'CheckDebianLinuxVersion', 'CheckSuseLinuxVersion',
   * 'CheckOracleLinuxVersion', 'CheckUbuntuLinuxVersion',
   * 'CheckCoreOsLinuxVersion', 'WindowsServerVersionConditionallySupported',
   * 'NoGuestOperatingSystemConditionallySupported',
   * 'WindowsClientVersionsConditionallySupported', 'BootTypeUnknown',
   * 'GuestOperatingSystemUnknown', 'WindowsServerVersionsSupportedWithCaveat',
   * 'WindowsOSNoLongerUnderMSSupport',
   * 'EndorsedWithConditionsLinuxDistributions',
   * 'UnendorsedLinuxDistributions', 'NoVmSizeForStandardPricingTier',
   * 'NoVmSizeForBasicPricingTier'
   * @member {date} [createdTimestamp] Time when this machine was created.
   * Date-Time represented in ISO-8601 format.
   * @member {date} [updatedTimestamp] Time when this machine was last updated.
   * Date-Time represented in ISO-8601 format.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AssessedMachine
   *
   * @returns {object} metadata of AssessedMachine
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssessedMachine',
      type: {
        name: 'Composite',
        className: 'AssessedMachine',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          groups: {
            required: false,
            readOnly: true,
            serializedName: 'properties.groups',
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
          },
          discoveredTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.discoveredTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          bootType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.bootType',
            type: {
              name: 'String'
            }
          },
          datacenterContainer: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterContainer',
            type: {
              name: 'String'
            }
          },
          datacenterManagementServer: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterManagementServer',
            type: {
              name: 'String'
            }
          },
          datacenterMachineId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterMachineId',
            type: {
              name: 'String'
            }
          },
          datacenterManagementServerId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.datacenterManagementServerId',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          megabytesOfMemory: {
            required: false,
            readOnly: true,
            serializedName: 'properties.megabytesOfMemory',
            type: {
              name: 'Number'
            }
          },
          numberOfCores: {
            required: false,
            readOnly: true,
            serializedName: 'properties.numberOfCores',
            type: {
              name: 'Number'
            }
          },
          operatingSystem: {
            required: false,
            readOnly: true,
            serializedName: 'properties.operatingSystem',
            type: {
              name: 'String'
            }
          },
          monthlyBandwidthCost: {
            required: false,
            readOnly: true,
            serializedName: 'properties.monthlyBandwidthCost',
            type: {
              name: 'Number'
            }
          },
          monthlyStorageCost: {
            required: false,
            readOnly: true,
            serializedName: 'properties.monthlyStorageCost',
            type: {
              name: 'Number'
            }
          },
          disks: {
            required: false,
            readOnly: true,
            serializedName: 'properties.disks',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'AssessedDiskElementType',
                  type: {
                    name: 'Composite',
                    className: 'AssessedDisk'
                  }
              }
            }
          },
          networkAdapters: {
            required: false,
            readOnly: true,
            serializedName: 'properties.networkAdapters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'AssessedNetworkAdapterElementType',
                  type: {
                    name: 'Composite',
                    className: 'AssessedNetworkAdapter'
                  }
              }
            }
          },
          recommendedSize: {
            required: false,
            readOnly: true,
            serializedName: 'properties.recommendedSize',
            type: {
              name: 'String'
            }
          },
          numberOfCoresForRecommendedSize: {
            required: false,
            readOnly: true,
            serializedName: 'properties.numberOfCoresForRecommendedSize',
            type: {
              name: 'Number'
            }
          },
          megabytesOfMemoryForRecommendedSize: {
            required: false,
            readOnly: true,
            serializedName: 'properties.megabytesOfMemoryForRecommendedSize',
            type: {
              name: 'Number'
            }
          },
          monthlyComputeCostForRecommendedSize: {
            required: false,
            readOnly: true,
            serializedName: 'properties.monthlyComputeCostForRecommendedSize',
            type: {
              name: 'Number'
            }
          },
          percentageCoresUtilization: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentageCoresUtilization',
            type: {
              name: 'Number'
            }
          },
          percentageMemoryUtilization: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentageMemoryUtilization',
            type: {
              name: 'Number'
            }
          },
          percentageCoresUtilizationDataPointsExpected: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentageCoresUtilizationDataPointsExpected',
            type: {
              name: 'Number'
            }
          },
          percentageCoresUtilizationDataPointsReceived: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentageCoresUtilizationDataPointsReceived',
            type: {
              name: 'Number'
            }
          },
          percentageMemoryUtilizationDataPointsExpected: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentageMemoryUtilizationDataPointsExpected',
            type: {
              name: 'Number'
            }
          },
          percentageMemoryUtilizationDataPointsReceived: {
            required: false,
            readOnly: true,
            serializedName: 'properties.percentageMemoryUtilizationDataPointsReceived',
            type: {
              name: 'Number'
            }
          },
          suitability: {
            required: false,
            readOnly: true,
            serializedName: 'properties.suitability',
            type: {
              name: 'String'
            }
          },
          suitabilityExplanation: {
            required: false,
            readOnly: true,
            serializedName: 'properties.suitabilityExplanation',
            type: {
              name: 'String'
            }
          },
          createdTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          updatedTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedTimestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = AssessedMachine;
