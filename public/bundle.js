(() => {
  // build/contracts/Notes.json
  var contractName = "Notes";
  var abi = [
    {
      inputs: [],
      name: "contractOwner",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: true
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "notes",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: true
    },
    {
      inputs: [],
      name: "getNotes",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: true
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "note",
          type: "string"
        }
      ],
      name: "addNote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "getOwner",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: true
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "input",
          type: "string"
        }
      ],
      name: "setOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "readFromContract",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "pure",
      type: "function",
      constant: true
    }
  ];
  var metadata = '{"compiler":{"version":"0.8.14+commit.80d49f37"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"note","type":"string"}],"name":"addNote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNotes","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"notes","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"readFromContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"input","type":"string"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/Notes.sol":"Notes"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/Notes.sol":{"keccak256":"0x46a1fb39c66c04fdbbb21b331d94ba217add4ec567bb6f5a738d108ad323a7c9","license":"MIT","urls":["bzz-raw://d3fec8f07fcae08f174191eabb311ced2c85b2cd69412053218c9493b5708e81","dweb:/ipfs/QmWNeDqq3PKdTnnb92AhbbUp3adcU6WP4J4iPtvTJd7o87"]}},"version":1}';
  var bytecode = "0x60806040526040518060400160405280600c81526020017f556e6b6e6f776e205573657200000000000000000000000000000000000000008152506000908051906020019061004f929190610062565b5034801561005c57600080fd5b50610165565b82805461006e90610134565b90600052602060002090601f01602090048101928261009057600085556100d7565b82601f106100a957805160ff19168380011785556100d7565b828001600101855582156100d7579182015b828111156100d65782518255916020019190600101906100bb565b5b5090506100e491906100e8565b5090565b5b808211156101015760008160009055506001016100e9565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061014c57607f821691505b60208210810361015f5761015e610105565b5b50919050565b6109b4806101746000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063893d20e81161005b578063893d20e8146100ec578063a4edff471461010a578063b4af200d14610126578063ce606ee0146101445761007d565b80630b8076ec146100825780633aedab531461009e57806361c3a7e6146100bc575b600080fd5b61009c6004803603810190610097919061069a565b610162565b005b6100a661017c565b6040516100b3919061076b565b60405180910390f35b6100d660048036038101906100d191906107c3565b6101b9565b6040516100e3919061076b565b60405180910390f35b6100f4610265565b604051610101919061076b565b60405180910390f35b610124600480360381019061011f919061069a565b6102f7565b005b61012e610336565b60405161013b91906108fc565b60405180910390f35b61014c61040f565b604051610159919061076b565b60405180910390f35b806000908051906020019061017892919061049d565b5050565b60606040518060400160405280600b81526020017f507265736574206e6f7465000000000000000000000000000000000000000000815250905090565b600181815481106101c957600080fd5b9060005260206000200160009150905080546101e49061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546102109061094d565b801561025d5780601f106102325761010080835404028352916020019161025d565b820191906000526020600020905b81548152906001019060200180831161024057829003601f168201915b505050505081565b6060600080546102749061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546102a09061094d565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b5050505050905090565b60018190806001815401808255809150506001900390600052602060002001600090919091909150908051906020019061033292919061049d565b5050565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104065783829060005260206000200180546103799061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546103a59061094d565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b50505050508152602001906001019061035a565b50505050905090565b6000805461041c9061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546104489061094d565b80156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b505050505081565b8280546104a99061094d565b90600052602060002090601f0160209004810192826104cb5760008555610512565b82601f106104e457805160ff1916838001178555610512565b82800160010185558215610512579182015b828111156105115782518255916020019190600101906104f6565b5b50905061051f9190610523565b5090565b5b8082111561053c576000816000905550600101610524565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105a78261055e565b810181811067ffffffffffffffff821117156105c6576105c561056f565b5b80604052505050565b60006105d9610540565b90506105e5828261059e565b919050565b600067ffffffffffffffff8211156106055761060461056f565b5b61060e8261055e565b9050602081019050919050565b82818337600083830152505050565b600061063d610638846105ea565b6105cf565b90508281526020810184848401111561065957610658610559565b5b61066484828561061b565b509392505050565b600082601f83011261068157610680610554565b5b813561069184826020860161062a565b91505092915050565b6000602082840312156106b0576106af61054a565b5b600082013567ffffffffffffffff8111156106ce576106cd61054f565b5b6106da8482850161066c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561071d578082015181840152602081019050610702565b8381111561072c576000848401525b50505050565b600061073d826106e3565b61074781856106ee565b93506107578185602086016106ff565b6107608161055e565b840191505092915050565b600060208201905081810360008301526107858184610732565b905092915050565b6000819050919050565b6107a08161078d565b81146107ab57600080fd5b50565b6000813590506107bd81610797565b92915050565b6000602082840312156107d9576107d861054a565b5b60006107e7848285016107ae565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000610838826106e3565b610842818561081c565b93506108528185602086016106ff565b61085b8161055e565b840191505092915050565b6000610872838361082d565b905092915050565b6000602082019050919050565b6000610892826107f0565b61089c81856107fb565b9350836020820285016108ae8561080c565b8060005b858110156108ea57848403895281516108cb8582610866565b94506108d68361087a565b925060208a019950506001810190506108b2565b50829750879550505050505092915050565b600060208201905081810360008301526109168184610887565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061096557607f821691505b6020821081036109785761097761091e565b5b5091905056fea26469706673582212204fb8de99bac5018ce2bfe47134db91e5aff89487c6f156b303b98a5964ea2e4964736f6c634300080e0033";
  var deployedBytecode = "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063893d20e81161005b578063893d20e8146100ec578063a4edff471461010a578063b4af200d14610126578063ce606ee0146101445761007d565b80630b8076ec146100825780633aedab531461009e57806361c3a7e6146100bc575b600080fd5b61009c6004803603810190610097919061069a565b610162565b005b6100a661017c565b6040516100b3919061076b565b60405180910390f35b6100d660048036038101906100d191906107c3565b6101b9565b6040516100e3919061076b565b60405180910390f35b6100f4610265565b604051610101919061076b565b60405180910390f35b610124600480360381019061011f919061069a565b6102f7565b005b61012e610336565b60405161013b91906108fc565b60405180910390f35b61014c61040f565b604051610159919061076b565b60405180910390f35b806000908051906020019061017892919061049d565b5050565b60606040518060400160405280600b81526020017f507265736574206e6f7465000000000000000000000000000000000000000000815250905090565b600181815481106101c957600080fd5b9060005260206000200160009150905080546101e49061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546102109061094d565b801561025d5780601f106102325761010080835404028352916020019161025d565b820191906000526020600020905b81548152906001019060200180831161024057829003601f168201915b505050505081565b6060600080546102749061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546102a09061094d565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b5050505050905090565b60018190806001815401808255809150506001900390600052602060002001600090919091909150908051906020019061033292919061049d565b5050565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104065783829060005260206000200180546103799061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546103a59061094d565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b50505050508152602001906001019061035a565b50505050905090565b6000805461041c9061094d565b80601f01602080910402602001604051908101604052809291908181526020018280546104489061094d565b80156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b505050505081565b8280546104a99061094d565b90600052602060002090601f0160209004810192826104cb5760008555610512565b82601f106104e457805160ff1916838001178555610512565b82800160010185558215610512579182015b828111156105115782518255916020019190600101906104f6565b5b50905061051f9190610523565b5090565b5b8082111561053c576000816000905550600101610524565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105a78261055e565b810181811067ffffffffffffffff821117156105c6576105c561056f565b5b80604052505050565b60006105d9610540565b90506105e5828261059e565b919050565b600067ffffffffffffffff8211156106055761060461056f565b5b61060e8261055e565b9050602081019050919050565b82818337600083830152505050565b600061063d610638846105ea565b6105cf565b90508281526020810184848401111561065957610658610559565b5b61066484828561061b565b509392505050565b600082601f83011261068157610680610554565b5b813561069184826020860161062a565b91505092915050565b6000602082840312156106b0576106af61054a565b5b600082013567ffffffffffffffff8111156106ce576106cd61054f565b5b6106da8482850161066c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561071d578082015181840152602081019050610702565b8381111561072c576000848401525b50505050565b600061073d826106e3565b61074781856106ee565b93506107578185602086016106ff565b6107608161055e565b840191505092915050565b600060208201905081810360008301526107858184610732565b905092915050565b6000819050919050565b6107a08161078d565b81146107ab57600080fd5b50565b6000813590506107bd81610797565b92915050565b6000602082840312156107d9576107d861054a565b5b60006107e7848285016107ae565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000610838826106e3565b610842818561081c565b93506108528185602086016106ff565b61085b8161055e565b840191505092915050565b6000610872838361082d565b905092915050565b6000602082019050919050565b6000610892826107f0565b61089c81856107fb565b9350836020820285016108ae8561080c565b8060005b858110156108ea57848403895281516108cb8582610866565b94506108d68361087a565b925060208a019950506001810190506108b2565b50829750879550505050505092915050565b600060208201905081810360008301526109168184610887565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061096557607f821691505b6020821081036109785761097761091e565b5b5091905056fea26469706673582212204fb8de99bac5018ce2bfe47134db91e5aff89487c6f156b303b98a5964ea2e4964736f6c634300080e0033";
  var immutableReferences = {};
  var generatedSources = [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:516:1",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "35:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "52:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "55:77:1",
                        type: "",
                        value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "45:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "45:88:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "45:88:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "149:1:1",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "152:4:1",
                        type: "",
                        value: "0x22"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "142:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "142:15:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "142:15:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "173:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "176:4:1",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "166:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "166:15:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "166:15:1"
                }
              ]
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "7:180:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "244:269:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "254:22:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "268:4:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "274:1:1",
                        type: "",
                        value: "2"
                      }
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "264:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "264:12:1"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "254:6:1"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "285:38:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "315:4:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "321:1:1",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "311:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "311:12:1"
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "289:18:1",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "362:51:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "376:27:1",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "390:6:1"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "398:4:1",
                              type: "",
                              value: "0x7f"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "386:3:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "386:17:1"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "376:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "342:18:1"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "335:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "335:26:1"
                  },
                  nodeType: "YulIf",
                  src: "332:81:1"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "465:42:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "479:16:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "479:18:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "479:18:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "429:18:1"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "452:6:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "460:2:1",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "449:2:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "449:14:1"
                      }
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "426:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "426:38:1"
                  },
                  nodeType: "YulIf",
                  src: "423:84:1"
                }
              ]
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "228:4:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "237:6:1",
                type: ""
              }
            ],
            src: "193:320:1"
          }
        ]
      },
      contents: "{\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
      id: 1,
      language: "Yul",
      name: "#utility.yul"
    }
  ];
  var deployedGeneratedSources = [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:8313:1",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "47:35:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "57:19:1",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "73:2:1",
                        type: "",
                        value: "64"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "67:5:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "67:9:1"
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "57:6:1"
                    }
                  ]
                }
              ]
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "40:6:1",
                type: ""
              }
            ],
            src: "7:75:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "177:28:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "194:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "197:1:1",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "187:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "187:12:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "187:12:1"
                }
              ]
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "88:117:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "300:28:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "317:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "320:1:1",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "310:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "310:12:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "310:12:1"
                }
              ]
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "211:117:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "423:28:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "440:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "443:1:1",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "433:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "433:12:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "433:12:1"
                }
              ]
            },
            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            nodeType: "YulFunctionDefinition",
            src: "334:117:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "546:28:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "563:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "566:1:1",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "556:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "556:12:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "556:12:1"
                }
              ]
            },
            name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            nodeType: "YulFunctionDefinition",
            src: "457:117:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "628:54:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "638:38:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "656:5:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "663:2:1",
                            type: "",
                            value: "31"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "652:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "652:14:1"
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "672:2:1",
                            type: "",
                            value: "31"
                          }
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "668:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "668:7:1"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "648:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "648:28:1"
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "638:6:1"
                    }
                  ]
                }
              ]
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "611:5:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "621:6:1",
                type: ""
              }
            ],
            src: "580:102:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "716:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "733:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "736:77:1",
                        type: "",
                        value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "726:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "726:88:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "726:88:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "830:1:1",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "833:4:1",
                        type: "",
                        value: "0x41"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "823:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "823:15:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "823:15:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "854:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "857:4:1",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "847:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "847:15:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "847:15:1"
                }
              ]
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "688:180:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "917:238:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "927:58:1",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "949:6:1"
                      },
                      {
                        arguments: [
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "979:4:1"
                          }
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "957:21:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "957:27:1"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "945:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "945:40:1"
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "931:10:1",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1096:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "1098:16:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1098:18:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1098:18:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "1039:10:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1051:18:1",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1036:2:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1036:34:1"
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "1075:10:1"
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "1087:6:1"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "1072:2:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1072:22:1"
                      }
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "1033:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1033:62:1"
                  },
                  nodeType: "YulIf",
                  src: "1030:88:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1134:2:1",
                        type: "",
                        value: "64"
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "1138:10:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1127:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1127:22:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1127:22:1"
                }
              ]
            },
            name: "finalize_allocation",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "903:6:1",
                type: ""
              },
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "911:4:1",
                type: ""
              }
            ],
            src: "874:281:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1202:88:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1212:30:1",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "allocate_unbounded",
                      nodeType: "YulIdentifier",
                      src: "1222:18:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1222:20:1"
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "1212:6:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "1271:6:1"
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "1279:4:1"
                      }
                    ],
                    functionName: {
                      name: "finalize_allocation",
                      nodeType: "YulIdentifier",
                      src: "1251:19:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1251:33:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1251:33:1"
                }
              ]
            },
            name: "allocate_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "1186:4:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "1195:6:1",
                type: ""
              }
            ],
            src: "1161:129:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1363:241:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1468:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "1470:16:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1470:18:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1470:18:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1440:6:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1448:18:1",
                        type: "",
                        value: "0xffffffffffffffff"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "1437:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1437:30:1"
                  },
                  nodeType: "YulIf",
                  src: "1434:56:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "1500:37:1",
                  value: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1530:6:1"
                      }
                    ],
                    functionName: {
                      name: "round_up_to_mul_of_32",
                      nodeType: "YulIdentifier",
                      src: "1508:21:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1508:29:1"
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "1500:4:1"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "1574:23:1",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "1586:4:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1592:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1582:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1582:15:1"
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "1574:4:1"
                    }
                  ]
                }
              ]
            },
            name: "array_allocation_size_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1347:6:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "1358:4:1",
                type: ""
              }
            ],
            src: "1296:308:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1661:103:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "1684:3:1"
                      },
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "1689:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1694:6:1"
                      }
                    ],
                    functionName: {
                      name: "calldatacopy",
                      nodeType: "YulIdentifier",
                      src: "1671:12:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1671:30:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1671:30:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "1742:3:1"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1747:6:1"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1738:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1738:16:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1756:1:1",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1731:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1731:27:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1731:27:1"
                }
              ]
            },
            name: "copy_calldata_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "1643:3:1",
                type: ""
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "1648:3:1",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1653:6:1",
                type: ""
              }
            ],
            src: "1610:154:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1854:328:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1864:75:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1931:6:1"
                          }
                        ],
                        functionName: {
                          name: "array_allocation_size_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "1889:41:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1889:49:1"
                      }
                    ],
                    functionName: {
                      name: "allocate_memory",
                      nodeType: "YulIdentifier",
                      src: "1873:15:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1873:66:1"
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "1864:5:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "1955:5:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1962:6:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1948:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1948:21:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1948:21:1"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1978:27:1",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "1993:5:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2000:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1989:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1989:16:1"
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "1982:3:1",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2043:83:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            nodeType: "YulIdentifier",
                            src: "2045:77:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2045:79:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2045:79:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "2024:3:1"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "2029:6:1"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2020:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2020:16:1"
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "2038:3:1"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2017:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2017:25:1"
                  },
                  nodeType: "YulIf",
                  src: "2014:112:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "2159:3:1"
                      },
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "2164:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2169:6:1"
                      }
                    ],
                    functionName: {
                      name: "copy_calldata_to_memory",
                      nodeType: "YulIdentifier",
                      src: "2135:23:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2135:41:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2135:41:1"
                }
              ]
            },
            name: "abi_decode_available_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "1827:3:1",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1832:6:1",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "1840:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "1848:5:1",
                type: ""
              }
            ],
            src: "1770:412:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2264:278:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2313:83:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            nodeType: "YulIdentifier",
                            src: "2315:77:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2315:79:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2315:79:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2292:6:1"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2300:4:1",
                                type: "",
                                value: "0x1f"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2288:3:1"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2288:17:1"
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "2307:3:1"
                          }
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "2284:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2284:27:1"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2277:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2277:35:1"
                  },
                  nodeType: "YulIf",
                  src: "2274:122:1"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2405:34:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2432:6:1"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2419:12:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2419:20:1"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "2409:6:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "2448:88:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "2509:6:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2517:4:1",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2505:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2505:17:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2524:6:1"
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "2532:3:1"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "2457:47:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2457:79:1"
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "2448:5:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2242:6:1",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2250:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "2258:5:1",
                type: ""
              }
            ],
            src: "2202:340:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2624:433:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2670:83:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "2672:77:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2672:79:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2672:79:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2645:7:1"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2654:9:1"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2641:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2641:23:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2666:2:1",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2637:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2637:32:1"
                  },
                  nodeType: "YulIf",
                  src: "2634:119:1"
                },
                {
                  nodeType: "YulBlock",
                  src: "2763:287:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2778:45:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2809:9:1"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2820:1:1",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2805:3:1"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2805:17:1"
                          }
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "2792:12:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2792:31:1"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2782:6:1",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "2870:83:1",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "2872:77:1"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2872:79:1"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "2872:79:1"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "2842:6:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2850:18:1",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "2839:2:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2839:30:1"
                      },
                      nodeType: "YulIf",
                      src: "2836:117:1"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2967:73:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3012:9:1"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3023:6:1"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3008:3:1"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3008:22:1"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3032:7:1"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "2977:30:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2977:63:1"
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2967:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2594:9:1",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2605:7:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2617:6:1",
                type: ""
              }
            ],
            src: "2548:509:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3122:40:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3133:22:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3149:5:1"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "3143:5:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3143:12:1"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "3133:6:1"
                    }
                  ]
                }
              ]
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3105:5:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3115:6:1",
                type: ""
              }
            ],
            src: "3063:99:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3264:73:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3281:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3286:6:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3274:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3274:19:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3274:19:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "3302:29:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3321:3:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3326:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3317:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3317:14:1"
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "3302:11:1"
                    }
                  ]
                }
              ]
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3236:3:1",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3241:6:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "3252:11:1",
                type: ""
              }
            ],
            src: "3168:169:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3392:258:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3402:10:1",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "3411:1:1",
                    type: "",
                    value: "0"
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "3406:1:1",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3471:63:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "3496:3:1"
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "3501:1:1"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3492:3:1"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3492:11:1"
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "3515:3:1"
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "3520:1:1"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "3511:3:1"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3511:11:1"
                                }
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "3505:5:1"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3505:18:1"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3485:6:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3485:39:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3485:39:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "3432:1:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3435:6:1"
                      }
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "3429:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3429:13:1"
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "3443:19:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "3445:15:1",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "3454:1:1"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3457:2:1",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "3450:3:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3450:10:1"
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "3445:1:1"
                          }
                        ]
                      }
                    ]
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "3425:3:1",
                    statements: []
                  },
                  src: "3421:113:1"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3568:76:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "3618:3:1"
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "3623:6:1"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3614:3:1"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3614:16:1"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3632:1:1",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3607:6:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3607:27:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3607:27:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "3549:1:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3552:6:1"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "3546:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3546:13:1"
                  },
                  nodeType: "YulIf",
                  src: "3543:101:1"
                }
              ]
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3374:3:1",
                type: ""
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "3379:3:1",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3384:6:1",
                type: ""
              }
            ],
            src: "3343:307:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3748:272:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3758:53:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3805:5:1"
                      }
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "3772:32:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3772:39:1"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "3762:6:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "3820:78:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3886:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3891:6:1"
                      }
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3827:58:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3827:71:1"
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "3820:3:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3933:5:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3940:4:1",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3929:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3929:16:1"
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3947:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3952:6:1"
                      }
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "3907:21:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3907:52:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3907:52:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "3968:46:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3979:3:1"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4006:6:1"
                          }
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "3984:21:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3984:29:1"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3975:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "3975:39:1"
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "3968:3:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3729:5:1",
                type: ""
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3736:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "3744:3:1",
                type: ""
              }
            ],
            src: "3656:364:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4144:195:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4154:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4166:9:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4177:2:1",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4162:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4162:18:1"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4154:4:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4201:9:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4212:1:1",
                            type: "",
                            value: "0"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4197:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4197:17:1"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "4220:4:1"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4226:9:1"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "4216:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4216:20:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4190:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4190:47:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4190:47:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "4246:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "4318:6:1"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "4327:4:1"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4254:63:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4254:78:1"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4246:4:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4116:9:1",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4128:6:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4139:4:1",
                type: ""
              }
            ],
            src: "4026:313:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4390:32:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4400:16:1",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "4411:5:1"
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "4400:7:1"
                    }
                  ]
                }
              ]
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4372:5:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "4382:7:1",
                type: ""
              }
            ],
            src: "4345:77:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4471:79:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4528:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4537:1:1",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4540:1:1",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "4530:6:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4530:12:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4530:12:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "4494:5:1"
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "4519:5:1"
                              }
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "4501:17:1"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4501:24:1"
                          }
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "4491:2:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4491:35:1"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "4484:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4484:43:1"
                  },
                  nodeType: "YulIf",
                  src: "4481:63:1"
                }
              ]
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4464:5:1",
                type: ""
              }
            ],
            src: "4428:122:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4608:87:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4618:29:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "4640:6:1"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "4627:12:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4627:20:1"
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "4618:5:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "4683:5:1"
                      }
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "4656:26:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4656:33:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4656:33:1"
                }
              ]
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "4586:6:1",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "4594:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4602:5:1",
                type: ""
              }
            ],
            src: "4556:139:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4767:263:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4813:83:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "4815:77:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4815:79:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4815:79:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4788:7:1"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4797:9:1"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "4784:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4784:23:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4809:2:1",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "4780:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4780:32:1"
                  },
                  nodeType: "YulIf",
                  src: "4777:119:1"
                },
                {
                  nodeType: "YulBlock",
                  src: "4906:117:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4921:15:1",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4935:1:1",
                        type: "",
                        value: "0"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "4925:6:1",
                          type: ""
                        }
                      ]
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "4950:63:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4985:9:1"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "4996:6:1"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4981:3:1"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4981:22:1"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5005:7:1"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "4960:20:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4960:53:1"
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "4950:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4737:9:1",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "4748:7:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4760:6:1",
                type: ""
              }
            ],
            src: "4701:329:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5120:40:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5131:22:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5147:5:1"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "5141:5:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5141:12:1"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "5131:6:1"
                    }
                  ]
                }
              ]
            },
            name: "array_length_t_array$_t_string_memory_ptr_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5103:5:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5113:6:1",
                type: ""
              }
            ],
            src: "5036:124:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5287:73:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5304:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5309:6:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5297:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5297:19:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5297:19:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5325:29:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5344:3:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5349:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5340:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5340:14:1"
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "5325:11:1"
                    }
                  ]
                }
              ]
            },
            name: "array_storeLengthForEncoding_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "5259:3:1",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5264:6:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "5275:11:1",
                type: ""
              }
            ],
            src: "5166:194:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5448:60:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5458:11:1",
                  value: {
                    name: "ptr",
                    nodeType: "YulIdentifier",
                    src: "5466:3:1"
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "5458:4:1"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "5479:22:1",
                  value: {
                    arguments: [
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "5491:3:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5496:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5487:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5487:14:1"
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "5479:4:1"
                    }
                  ]
                }
              ]
            },
            name: "array_dataslot_t_array$_t_string_memory_ptr_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "5435:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "5443:4:1",
                type: ""
              }
            ],
            src: "5366:142:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5600:73:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5617:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5622:6:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5610:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5610:19:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5610:19:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5638:29:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5657:3:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5662:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5653:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5653:14:1"
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "5638:11:1"
                    }
                  ]
                }
              ]
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "5572:3:1",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5577:6:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "5588:11:1",
                type: ""
              }
            ],
            src: "5514:159:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5761:262:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5771:53:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5818:5:1"
                      }
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "5785:32:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5785:39:1"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "5775:6:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "5833:68:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5889:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5894:6:1"
                      }
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "5840:48:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5840:61:1"
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "5833:3:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5936:5:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5943:4:1",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5932:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5932:16:1"
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5950:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5955:6:1"
                      }
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "5910:21:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5910:52:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5910:52:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5971:46:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5982:3:1"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "6009:6:1"
                          }
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "5987:21:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5987:29:1"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5978:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5978:39:1"
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "5971:3:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5742:5:1",
                type: ""
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "5749:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "5757:3:1",
                type: ""
              }
            ],
            src: "5679:344:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6129:96:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6139:80:1",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "6207:6:1"
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "6215:3:1"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "6153:53:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6153:66:1"
                  },
                  variableNames: [
                    {
                      name: "updatedPos",
                      nodeType: "YulIdentifier",
                      src: "6139:10:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_encodeUpdatedPos_t_string_memory_ptr_to_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "6102:6:1",
                type: ""
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "6110:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "updatedPos",
                nodeType: "YulTypedName",
                src: "6118:10:1",
                type: ""
              }
            ],
            src: "6029:196:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6316:38:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6326:22:1",
                  value: {
                    arguments: [
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "6338:3:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6343:4:1",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "6334:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6334:14:1"
                  },
                  variableNames: [
                    {
                      name: "next",
                      nodeType: "YulIdentifier",
                      src: "6326:4:1"
                    }
                  ]
                }
              ]
            },
            name: "array_nextElement_t_array$_t_string_memory_ptr_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "6303:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "next",
                nodeType: "YulTypedName",
                src: "6311:4:1",
                type: ""
              }
            ],
            src: "6231:123:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6532:847:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6542:78:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "6614:5:1"
                      }
                    ],
                    functionName: {
                      name: "array_length_t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "6556:57:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6556:64:1"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "6546:6:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "6629:103:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "6720:3:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "6725:6:1"
                      }
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "6636:83:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6636:96:1"
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "6629:3:1"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6741:20:1",
                  value: {
                    name: "pos",
                    nodeType: "YulIdentifier",
                    src: "6758:3:1"
                  },
                  variables: [
                    {
                      name: "headStart",
                      nodeType: "YulTypedName",
                      src: "6745:9:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6770:39:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "6786:3:1"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "6795:6:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6803:4:1",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "mul",
                          nodeType: "YulIdentifier",
                          src: "6791:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6791:17:1"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "6782:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6782:27:1"
                  },
                  variables: [
                    {
                      name: "tail",
                      nodeType: "YulTypedName",
                      src: "6774:4:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6818:81:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "6893:5:1"
                      }
                    ],
                    functionName: {
                      name: "array_dataslot_t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "6833:59:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6833:66:1"
                  },
                  variables: [
                    {
                      name: "baseRef",
                      nodeType: "YulTypedName",
                      src: "6822:7:1",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6908:21:1",
                  value: {
                    name: "baseRef",
                    nodeType: "YulIdentifier",
                    src: "6922:7:1"
                  },
                  variables: [
                    {
                      name: "srcPtr",
                      nodeType: "YulTypedName",
                      src: "6912:6:1",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6998:336:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "7019:3:1"
                            },
                            {
                              arguments: [
                                {
                                  name: "tail",
                                  nodeType: "YulIdentifier",
                                  src: "7028:4:1"
                                },
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "7034:9:1"
                                }
                              ],
                              functionName: {
                                name: "sub",
                                nodeType: "YulIdentifier",
                                src: "7024:3:1"
                              },
                              nodeType: "YulFunctionCall",
                              src: "7024:20:1"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "7012:6:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7012:33:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7012:33:1"
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "7058:34:1",
                        value: {
                          arguments: [
                            {
                              name: "srcPtr",
                              nodeType: "YulIdentifier",
                              src: "7085:6:1"
                            }
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "7079:5:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7079:13:1"
                        },
                        variables: [
                          {
                            name: "elementValue0",
                            nodeType: "YulTypedName",
                            src: "7062:13:1",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "7105:92:1",
                        value: {
                          arguments: [
                            {
                              name: "elementValue0",
                              nodeType: "YulIdentifier",
                              src: "7177:13:1"
                            },
                            {
                              name: "tail",
                              nodeType: "YulIdentifier",
                              src: "7192:4:1"
                            }
                          ],
                          functionName: {
                            name: "abi_encodeUpdatedPos_t_string_memory_ptr_to_t_string_memory_ptr",
                            nodeType: "YulIdentifier",
                            src: "7113:63:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7113:84:1"
                        },
                        variableNames: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "7105:4:1"
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "7210:80:1",
                        value: {
                          arguments: [
                            {
                              name: "srcPtr",
                              nodeType: "YulIdentifier",
                              src: "7283:6:1"
                            }
                          ],
                          functionName: {
                            name: "array_nextElement_t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                            nodeType: "YulIdentifier",
                            src: "7220:62:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7220:70:1"
                        },
                        variableNames: [
                          {
                            name: "srcPtr",
                            nodeType: "YulIdentifier",
                            src: "7210:6:1"
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "7303:21:1",
                        value: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "7314:3:1"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "7319:4:1",
                              type: "",
                              value: "0x20"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "7310:3:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7310:14:1"
                        },
                        variableNames: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "7303:3:1"
                          }
                        ]
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "6960:1:1"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "6963:6:1"
                      }
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "6957:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6957:13:1"
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "6971:18:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "6973:14:1",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "6982:1:1"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "6985:1:1",
                              type: "",
                              value: "1"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "6978:3:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "6978:9:1"
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "6973:1:1"
                          }
                        ]
                      }
                    ]
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "6942:14:1",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "6944:10:1",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "6953:1:1",
                          type: "",
                          value: "0"
                        },
                        variables: [
                          {
                            name: "i",
                            nodeType: "YulTypedName",
                            src: "6948:1:1",
                            type: ""
                          }
                        ]
                      }
                    ]
                  },
                  src: "6938:396:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "7343:11:1",
                  value: {
                    name: "tail",
                    nodeType: "YulIdentifier",
                    src: "7350:4:1"
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "7343:3:1"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "7363:10:1",
                  value: {
                    name: "pos",
                    nodeType: "YulIdentifier",
                    src: "7370:3:1"
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "7363:3:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_t_array$_t_string_memory_ptr_$dyn_memory_ptr_to_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "6511:5:1",
                type: ""
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "6518:3:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "6527:3:1",
                type: ""
              }
            ],
            src: "6388:991:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7553:245:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7563:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "7575:9:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7586:2:1",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "7571:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7571:18:1"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "7563:4:1"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "7610:9:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "7621:1:1",
                            type: "",
                            value: "0"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "7606:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "7606:17:1"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "7629:4:1"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "7635:9:1"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "7625:3:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "7625:20:1"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7599:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7599:47:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7599:47:1"
                },
                {
                  nodeType: "YulAssignment",
                  src: "7655:136:1",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "7777:6:1"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "7786:4:1"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_array$_t_string_memory_ptr_$dyn_memory_ptr_to_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "7663:113:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7663:128:1"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "7655:4:1"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_array$_t_string_memory_ptr_$dyn_memory_ptr__to_t_array$_t_string_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "7525:9:1",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "7537:6:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "7548:4:1",
                type: ""
              }
            ],
            src: "7385:413:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7832:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7849:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7852:77:1",
                        type: "",
                        value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7842:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7842:88:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7842:88:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7946:1:1",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7949:4:1",
                        type: "",
                        value: "0x22"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7939:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7939:15:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7939:15:1"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7970:1:1",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7973:4:1",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "7963:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7963:15:1"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7963:15:1"
                }
              ]
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "7804:180:1"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8041:269:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8051:22:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "8065:4:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8071:1:1",
                        type: "",
                        value: "2"
                      }
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "8061:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8061:12:1"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "8051:6:1"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "8082:38:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "8112:4:1"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8118:1:1",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "8108:3:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8108:12:1"
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "8086:18:1",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "8159:51:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "8173:27:1",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "8187:6:1"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "8195:4:1",
                              type: "",
                              value: "0x7f"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "8183:3:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "8183:17:1"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "8173:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "8139:18:1"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "8132:6:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8132:26:1"
                  },
                  nodeType: "YulIf",
                  src: "8129:81:1"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "8262:42:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "8276:16:1"
                          },
                          nodeType: "YulFunctionCall",
                          src: "8276:18:1"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "8276:18:1"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "8226:18:1"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "8249:6:1"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "8257:2:1",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "8246:2:1"
                        },
                        nodeType: "YulFunctionCall",
                        src: "8246:14:1"
                      }
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "8223:2:1"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8223:38:1"
                  },
                  nodeType: "YulIf",
                  src: "8220:84:1"
                }
              ]
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "8025:4:1",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "8034:6:1",
                type: ""
              }
            ],
            src: "7990:320:1"
          }
        ]
      },
      contents: "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_array$_t_string_memory_ptr_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_dataslot_t_array$_t_string_memory_ptr_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encodeUpdatedPos_t_string_memory_ptr_to_t_string_memory_ptr(value0, pos) -> updatedPos {\n        updatedPos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(value0, pos)\n    }\n\n    function array_nextElement_t_array$_t_string_memory_ptr_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    // string[] -> string[]\n    function abi_encode_t_array$_t_string_memory_ptr_$dyn_memory_ptr_to_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_string_memory_ptr_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let headStart := pos\n        let tail := add(pos, mul(length, 0x20))\n        let baseRef := array_dataslot_t_array$_t_string_memory_ptr_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, sub(tail, headStart))\n            let elementValue0 := mload(srcPtr)\n            tail := abi_encodeUpdatedPos_t_string_memory_ptr_to_t_string_memory_ptr(elementValue0, tail)\n            srcPtr := array_nextElement_t_array$_t_string_memory_ptr_$dyn_memory_ptr(srcPtr)\n            pos := add(pos, 0x20)\n        }\n        pos := tail\n        end := pos\n    }\n\n    function abi_encode_tuple_t_array$_t_string_memory_ptr_$dyn_memory_ptr__to_t_array$_t_string_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_string_memory_ptr_$dyn_memory_ptr_to_t_array$_t_string_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
      id: 1,
      language: "Yul",
      name: "#utility.yul"
    }
  ];
  var sourceMap = "58:521:0:-:0;;;77:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;58:521;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:1:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;58:521:0:-;;;;;;;";
  var deployedSourceMap = "58:521:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:78;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;483:94;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;125:21;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;310:87;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;235:71;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;151:80;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;77:44;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;401:78;469:5;453:13;:21;;;;;;;;;;;;:::i;:::-;;401:78;:::o;483:94::-;531:13;552:20;;;;;;;;;;;;;;;;;;;483:94;:::o;125:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;310:87::-;351:13;379;372:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;310:87;:::o;235:71::-;285:5;296:4;285:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;235:71;:::o;151:80::-;191:15;221:5;214:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;151:80;:::o;77:44::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:1:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:154::-;1694:6;1689:3;1684;1671:30;1756:1;1747:6;1742:3;1738:16;1731:27;1610:154;;;:::o;1770:412::-;1848:5;1873:66;1889:49;1931:6;1889:49;:::i;:::-;1873:66;:::i;:::-;1864:75;;1962:6;1955:5;1948:21;2000:4;1993:5;1989:16;2038:3;2029:6;2024:3;2020:16;2017:25;2014:112;;;2045:79;;:::i;:::-;2014:112;2135:41;2169:6;2164:3;2159;2135:41;:::i;:::-;1854:328;1770:412;;;;;:::o;2202:340::-;2258:5;2307:3;2300:4;2292:6;2288:17;2284:27;2274:122;;2315:79;;:::i;:::-;2274:122;2432:6;2419:20;2457:79;2532:3;2524:6;2517:4;2509:6;2505:17;2457:79;:::i;:::-;2448:88;;2264:278;2202:340;;;;:::o;2548:509::-;2617:6;2666:2;2654:9;2645:7;2641:23;2637:32;2634:119;;;2672:79;;:::i;:::-;2634:119;2820:1;2809:9;2805:17;2792:31;2850:18;2842:6;2839:30;2836:117;;;2872:79;;:::i;:::-;2836:117;2977:63;3032:7;3023:6;3012:9;3008:22;2977:63;:::i;:::-;2967:73;;2763:287;2548:509;;;;:::o;3063:99::-;3115:6;3149:5;3143:12;3133:22;;3063:99;;;:::o;3168:169::-;3252:11;3286:6;3281:3;3274:19;3326:4;3321:3;3317:14;3302:29;;3168:169;;;;:::o;3343:307::-;3411:1;3421:113;3435:6;3432:1;3429:13;3421:113;;;3520:1;3515:3;3511:11;3505:18;3501:1;3496:3;3492:11;3485:39;3457:2;3454:1;3450:10;3445:15;;3421:113;;;3552:6;3549:1;3546:13;3543:101;;;3632:1;3623:6;3618:3;3614:16;3607:27;3543:101;3392:258;3343:307;;;:::o;3656:364::-;3744:3;3772:39;3805:5;3772:39;:::i;:::-;3827:71;3891:6;3886:3;3827:71;:::i;:::-;3820:78;;3907:52;3952:6;3947:3;3940:4;3933:5;3929:16;3907:52;:::i;:::-;3984:29;4006:6;3984:29;:::i;:::-;3979:3;3975:39;3968:46;;3748:272;3656:364;;;;:::o;4026:313::-;4139:4;4177:2;4166:9;4162:18;4154:26;;4226:9;4220:4;4216:20;4212:1;4201:9;4197:17;4190:47;4254:78;4327:4;4318:6;4254:78;:::i;:::-;4246:86;;4026:313;;;;:::o;4345:77::-;4382:7;4411:5;4400:16;;4345:77;;;:::o;4428:122::-;4501:24;4519:5;4501:24;:::i;:::-;4494:5;4491:35;4481:63;;4540:1;4537;4530:12;4481:63;4428:122;:::o;4556:139::-;4602:5;4640:6;4627:20;4618:29;;4656:33;4683:5;4656:33;:::i;:::-;4556:139;;;;:::o;4701:329::-;4760:6;4809:2;4797:9;4788:7;4784:23;4780:32;4777:119;;;4815:79;;:::i;:::-;4777:119;4935:1;4960:53;5005:7;4996:6;4985:9;4981:22;4960:53;:::i;:::-;4950:63;;4906:117;4701:329;;;;:::o;5036:124::-;5113:6;5147:5;5141:12;5131:22;;5036:124;;;:::o;5166:194::-;5275:11;5309:6;5304:3;5297:19;5349:4;5344:3;5340:14;5325:29;;5166:194;;;;:::o;5366:142::-;5443:4;5466:3;5458:11;;5496:4;5491:3;5487:14;5479:22;;5366:142;;;:::o;5514:159::-;5588:11;5622:6;5617:3;5610:19;5662:4;5657:3;5653:14;5638:29;;5514:159;;;;:::o;5679:344::-;5757:3;5785:39;5818:5;5785:39;:::i;:::-;5840:61;5894:6;5889:3;5840:61;:::i;:::-;5833:68;;5910:52;5955:6;5950:3;5943:4;5936:5;5932:16;5910:52;:::i;:::-;5987:29;6009:6;5987:29;:::i;:::-;5982:3;5978:39;5971:46;;5761:262;5679:344;;;;:::o;6029:196::-;6118:10;6153:66;6215:3;6207:6;6153:66;:::i;:::-;6139:80;;6029:196;;;;:::o;6231:123::-;6311:4;6343;6338:3;6334:14;6326:22;;6231:123;;;:::o;6388:991::-;6527:3;6556:64;6614:5;6556:64;:::i;:::-;6636:96;6725:6;6720:3;6636:96;:::i;:::-;6629:103;;6758:3;6803:4;6795:6;6791:17;6786:3;6782:27;6833:66;6893:5;6833:66;:::i;:::-;6922:7;6953:1;6938:396;6963:6;6960:1;6957:13;6938:396;;;7034:9;7028:4;7024:20;7019:3;7012:33;7085:6;7079:13;7113:84;7192:4;7177:13;7113:84;:::i;:::-;7105:92;;7220:70;7283:6;7220:70;:::i;:::-;7210:80;;7319:4;7314:3;7310:14;7303:21;;6998:336;6985:1;6982;6978:9;6973:14;;6938:396;;;6942:14;7350:4;7343:11;;7370:3;7363:10;;6532:847;;;;;6388:991;;;;:::o;7385:413::-;7548:4;7586:2;7575:9;7571:18;7563:26;;7635:9;7629:4;7625:20;7621:1;7610:9;7606:17;7599:47;7663:128;7786:4;7777:6;7663:128;:::i;:::-;7655:136;;7385:413;;;;:::o;7804:180::-;7852:77;7849:1;7842:88;7949:4;7946:1;7939:15;7973:4;7970:1;7963:15;7990:320;8034:6;8071:1;8065:4;8061:12;8051:22;;8118:1;8112:4;8108:12;8139:18;8129:81;;8195:4;8187:6;8183:17;8173:27;;8129:81;8257:2;8249:6;8246:14;8226:18;8223:38;8220:84;;8276:18;;:::i;:::-;8220:84;8041:269;7990:320;;;:::o";
  var source = "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.7;\n\ncontract Notes {\n  string public contractOwner = 'Unknown User';\n  string[] public notes;\n\n  function getNotes() view public returns(string[] memory) {\n    return notes;\n  }\n\n  function addNote(string memory note) public {\n    notes.push(note);\n  }\n\n  function getOwner() view public returns (string memory) {\n    return contractOwner;\n  }\n\n  function setOwner(string memory input) public {\n    contractOwner = input;\n  }\n\n  function readFromContract() pure public returns(string memory) {\n    return 'Preset note';\n  }\n}\n";
  var sourcePath = "/Users/ed/Projects/notes-blockchain/contracts/Notes.sol";
  var ast = {
    absolutePath: "project:/contracts/Notes.sol",
    exportedSymbols: {
      Notes: [
        55
      ]
    },
    id: 56,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: [
          "solidity",
          "^",
          "0.8",
          ".7"
        ],
        nodeType: "PragmaDirective",
        src: "33:23:0"
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "Notes",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 55,
        linearizedBaseContracts: [
          55
        ],
        name: "Notes",
        nameLocation: "67:5:0",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            functionSelector: "ce606ee0",
            id: 4,
            mutability: "mutable",
            name: "contractOwner",
            nameLocation: "91:13:0",
            nodeType: "VariableDeclaration",
            scope: 55,
            src: "77:44:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string"
            },
            typeName: {
              id: 2,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "77:6:0",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string"
              }
            },
            value: {
              hexValue: "556e6b6e6f776e2055736572",
              id: 3,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "string",
              lValueRequested: false,
              nodeType: "Literal",
              src: "107:14:0",
              typeDescriptions: {
                typeIdentifier: "t_stringliteral_4a8d5193d8269f57e87811b4de177862d8edbeb9c485007c992c573e3f95efc8",
                typeString: 'literal_string "Unknown User"'
              },
              value: "Unknown User"
            },
            visibility: "public"
          },
          {
            constant: false,
            functionSelector: "61c3a7e6",
            id: 7,
            mutability: "mutable",
            name: "notes",
            nameLocation: "141:5:0",
            nodeType: "VariableDeclaration",
            scope: 55,
            src: "125:21:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_array$_t_string_storage_$dyn_storage",
              typeString: "string[]"
            },
            typeName: {
              baseType: {
                id: 5,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "125:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string"
                }
              },
              id: 6,
              nodeType: "ArrayTypeName",
              src: "125:8:0",
              typeDescriptions: {
                typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr",
                typeString: "string[]"
              }
            },
            visibility: "public"
          },
          {
            body: {
              id: 15,
              nodeType: "Block",
              src: "208:23:0",
              statements: [
                {
                  expression: {
                    id: 13,
                    name: "notes",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 7,
                    src: "221:5:0",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_string_storage_$dyn_storage",
                      typeString: "string storage ref[] storage ref"
                    }
                  },
                  functionReturnParameters: 12,
                  id: 14,
                  nodeType: "Return",
                  src: "214:12:0"
                }
              ]
            },
            functionSelector: "b4af200d",
            id: 16,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getNotes",
            nameLocation: "160:8:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8,
              nodeType: "ParameterList",
              parameters: [],
              src: "168:2:0"
            },
            returnParameters: {
              id: 12,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 16,
                  src: "191:15:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    typeString: "string[]"
                  },
                  typeName: {
                    baseType: {
                      id: 9,
                      name: "string",
                      nodeType: "ElementaryTypeName",
                      src: "191:6:0",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage_ptr",
                        typeString: "string"
                      }
                    },
                    id: 10,
                    nodeType: "ArrayTypeName",
                    src: "191:8:0",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr",
                      typeString: "string[]"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "190:17:0"
            },
            scope: 55,
            src: "151:80:0",
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            body: {
              id: 27,
              nodeType: "Block",
              src: "279:27:0",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 24,
                        name: "note",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 18,
                        src: "296:4:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      ],
                      expression: {
                        id: 21,
                        name: "notes",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 7,
                        src: "285:5:0",
                        typeDescriptions: {
                          typeIdentifier: "t_array$_t_string_storage_$dyn_storage",
                          typeString: "string storage ref[] storage ref"
                        }
                      },
                      id: 23,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "push",
                      nodeType: "MemberAccess",
                      src: "285:10:0",
                      typeDescriptions: {
                        typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$bound_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        typeString: "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    id: 25,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "285:16:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 26,
                  nodeType: "ExpressionStatement",
                  src: "285:16:0"
                }
              ]
            },
            functionSelector: "a4edff47",
            id: 28,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "addNote",
            nameLocation: "244:7:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 19,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 18,
                  mutability: "mutable",
                  name: "note",
                  nameLocation: "266:4:0",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "252:18:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 17,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "252:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "251:20:0"
            },
            returnParameters: {
              id: 20,
              nodeType: "ParameterList",
              parameters: [],
              src: "279:0:0"
            },
            scope: 55,
            src: "235:71:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public"
          },
          {
            body: {
              id: 35,
              nodeType: "Block",
              src: "366:31:0",
              statements: [
                {
                  expression: {
                    id: 33,
                    name: "contractOwner",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 4,
                    src: "379:13:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref"
                    }
                  },
                  functionReturnParameters: 32,
                  id: 34,
                  nodeType: "Return",
                  src: "372:20:0"
                }
              ]
            },
            functionSelector: "893d20e8",
            id: 36,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getOwner",
            nameLocation: "319:8:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 29,
              nodeType: "ParameterList",
              parameters: [],
              src: "327:2:0"
            },
            returnParameters: {
              id: 32,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 31,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 36,
                  src: "351:13:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 30,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "351:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "350:15:0"
            },
            scope: 55,
            src: "310:87:0",
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            body: {
              id: 45,
              nodeType: "Block",
              src: "447:32:0",
              statements: [
                {
                  expression: {
                    id: 43,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 41,
                      name: "contractOwner",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4,
                      src: "453:13:0",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref"
                      }
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 42,
                      name: "input",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 38,
                      src: "469:5:0",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory"
                      }
                    },
                    src: "453:21:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref"
                    }
                  },
                  id: 44,
                  nodeType: "ExpressionStatement",
                  src: "453:21:0"
                }
              ]
            },
            functionSelector: "0b8076ec",
            id: 46,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setOwner",
            nameLocation: "410:8:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 39,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 38,
                  mutability: "mutable",
                  name: "input",
                  nameLocation: "433:5:0",
                  nodeType: "VariableDeclaration",
                  scope: 46,
                  src: "419:19:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 37,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "419:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "418:21:0"
            },
            returnParameters: {
              id: 40,
              nodeType: "ParameterList",
              parameters: [],
              src: "447:0:0"
            },
            scope: 55,
            src: "401:78:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public"
          },
          {
            body: {
              id: 53,
              nodeType: "Block",
              src: "546:31:0",
              statements: [
                {
                  expression: {
                    hexValue: "507265736574206e6f7465",
                    id: 51,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "string",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "559:13:0",
                    typeDescriptions: {
                      typeIdentifier: "t_stringliteral_cf4f094c9eeb7ef552cfd0b1cb7e2fe337d790dbbacd1e38ee8130d8738d0ef2",
                      typeString: 'literal_string "Preset note"'
                    },
                    value: "Preset note"
                  },
                  functionReturnParameters: 50,
                  id: 52,
                  nodeType: "Return",
                  src: "552:20:0"
                }
              ]
            },
            functionSelector: "3aedab53",
            id: 54,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "readFromContract",
            nameLocation: "492:16:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 47,
              nodeType: "ParameterList",
              parameters: [],
              src: "508:2:0"
            },
            returnParameters: {
              id: 50,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 49,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 54,
                  src: "531:13:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 48,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "531:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "530:15:0"
            },
            scope: 55,
            src: "483:94:0",
            stateMutability: "pure",
            virtual: false,
            visibility: "public"
          }
        ],
        scope: 56,
        src: "58:521:0",
        usedErrors: []
      }
    ],
    src: "33:547:0"
  };
  var compiler = {
    name: "solc",
    version: "0.8.14+commit.80d49f37.Emscripten.clang"
  };
  var networks = {
    "5777": {
      events: {},
      links: {},
      address: "0x0aC05E4Ea39c2f3E3c4701b4f1Df14463a28F8d6",
      transactionHash: "0x0c8068f72a221ea582fc0e15193b2989128fc19c1b133e9192fd73e86bd209e1"
    }
  };
  var schemaVersion = "3.4.7";
  var updatedAt = "2022-06-01T12:05:08.532Z";
  var networkType = "ethereum";
  var devdoc = {
    kind: "dev",
    methods: {},
    version: 1
  };
  var userdoc = {
    kind: "user",
    methods: {},
    version: 1
  };
  var Notes_default = {
    contractName,
    abi,
    metadata,
    bytecode,
    deployedBytecode,
    immutableReferences,
    generatedSources,
    deployedGeneratedSources,
    sourceMap,
    deployedSourceMap,
    source,
    sourcePath,
    ast,
    compiler,
    networks,
    schemaVersion,
    updatedAt,
    networkType,
    devdoc,
    userdoc
  };

  // public/view.js
  var web3;
  var contract;
  document.addEventListener("DOMContentLoaded", async () => {
    web3 = await initWeb3();
    contract = await notesContract(web3);
    const setOwner = document.getElementById("setOwner");
    setOwner.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formName = e.target.elements[0].value;
      await setName(formName);
    });
    loadName();
  });
  var initWeb3 = () => {
    return new Promise(async (res, rej) => {
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.enable();
          return res(new Web3(window.ethereum));
        } catch (err) {
          rej(err);
        }
      } else {
        res(new Web3("http://localhost:9545"));
      }
    });
  };
  var notesContract = () => {
    return new web3.eth.Contract(Notes_default.abi, Notes_default.networks["5777"].address);
  };
  var setName = async (formName) => {
    await contract.methods.setOwner(formName).send({ from: "0x90adb54c32eb3ed3752ef5827b38d3581fa71b3b" });
    loadName();
  };
  var loadName = async () => {
    const name = document.getElementById("owner");
    const owner = await contract.methods.getOwner().call();
    name.innerHTML = owner;
  };
})();
