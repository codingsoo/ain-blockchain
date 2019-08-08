const path = require('path');
const RULES_FILE_PATH = path.resolve(__dirname, 'db', 'database.rules.json');
const BLOCKCHAINS_DIR = path.resolve(__dirname, 'blockchain', '.blockchains');
const STAKE = process.env.STAKE ? Number(process.env.STAKE) : null;

/**
 * Message types for communication between nodes
 * @enum {string}
 */
const MessageTypes = {
  TRANSACTION: 'transaction',
  CHAIN_SUBSECTION: 'chain_subsection',
  CHAIN_SUBSECTION_REQUEST: 'chain_subsection_request',
  VOTING: 'voting',
};

/**
 * Voting types which can trigger
 * @enum {string}
 */
const VotingActionTypes = {
  NEW_VOTING: 'new_voting',
  PROPOSED_BLOCK: 'proposed_block',
  PRE_VOTE: 'pre_vote',
  PRE_COMMIT: 'pre_commit',
};

/**
 * Vote states that nodes can be in when reaching consensus on blocks
 * @enum {string}
 */
const VotingStatus = {
  WAIT_FOR_BLOCK: 'wait_for_block',
  BLOCK_RECEIVED: 'block_received',
  PRE_VOTE: 'pre_vote',
  PRE_COMMIT: 'pre_commit',
  COMMITTED: 'committed',
  SYNCING: 'syncing',
  START_UP: 'start_up',
};

/**
 * Paths to db locations where consensus information is stored
 * @enum {string}
 */
const ConsensusDbKeys = {
  RECENT_FORGERS_PATH: '_recentForgers',
  VOTING_ROUND_PATH: '_voting',
  VOTING_ROUND_VALIDATORS_PATH: '_voting/validators/',
  VOTING_ROUND_FORGER_PATH: '_voting/forger',
  VOTING_ROUND_PRE_COMMITS_PATH: '_voting/preCommits',
  VOTING_ROUND_PRE_VOTES_PATH: '_voting/preVotes',
  VOTING_ROUND_THRESHOLD_PATH: '_voting/threshold',
  VOTING_ROUND_HEIGHT_PATH: '_voting/height',
  STAKEHOLDER_PATH: 'stakes',
  VOTING_ROUND_BLOCK_HASH: '_voting/blockHash',
  VOTING_NEXT_ROUND_VALIDATORS_PATH: '_voting/next_round_validators',
};

/**
 * Types of write operations supported by Db
 * @enum {string}
 */
const DbOperations = {
  INCREASE: 'INCREASE',
  SET: 'SET',
  BATCH: 'BATCH',
  UPDATE: 'UPDATE',
  GET: 'GET',
};

module.exports = {
  RULES_FILE_PATH,
  BLOCKCHAINS_DIR,
  MessageTypes,
  VotingStatus,
  STAKE,
  VotingActionTypes,
  ConsensusDbKeys,
  DbOperations,
};