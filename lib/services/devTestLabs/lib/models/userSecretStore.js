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
 * Properties of a user's secret store.
 *
 */
class UserSecretStore {
  /**
   * Create a UserSecretStore.
   * @member {string} [keyVaultUri] The URI of the user's Key vault.
   * @member {string} [keyVaultId] The ID of the user's Key vault.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserSecretStore
   *
   * @returns {object} metadata of UserSecretStore
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserSecretStore',
      type: {
        name: 'Composite',
        className: 'UserSecretStore',
        modelProperties: {
          keyVaultUri: {
            required: false,
            serializedName: 'keyVaultUri',
            type: {
              name: 'String'
            }
          },
          keyVaultId: {
            required: false,
            serializedName: 'keyVaultId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserSecretStore;