#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`fal.ai MCP and shared task CLI ${VERSION}
fal-ai-mcp                              Local stdio MCP
fal-ai-cli <command> --help               Shared actual arguments
fal-ai-cli schema <command>               Actual JSON input schema
fal-ai-cli doctor [--network]             Local settings / explicit model read
fal-ai-cli login                          Private API-key instructions only
FAL_KEY / FAL_TOKEN_FILE                  Private key for the intended account
FAL_ACCOUNTS / FAL_DEFAULT_ACCOUNT        Strict isolated account key profiles
FAL_READ_ONLY=1 / FAL_ALLOW_DESTRUCTIVE=0  Enforced approval policy
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Create only the required permissions for the intended fal account at https://fal.ai/dashboard/keys. Store FAL_KEY or absolute owner-only FAL_TOKEN_FILE privately. Named FAL_ACCOUNTS profiles never inherit a global key. Official OAuth MCP relay and genmedia sessions are separate. login prints instructions only; it does not save keys, inspect sessions, sign in, create credentials or spend credits.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('fal-ai-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
