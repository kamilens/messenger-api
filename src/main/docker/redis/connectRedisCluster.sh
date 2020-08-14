#!/usr/bin/env bash

function log {
  echo "[$(date)]: $*"
}

log "Start Redis Cluster builder"
sleep 5

log "Connect all Redis containers"
redis-cli \
  --cluster-replicas 1 \
  --cluster-yes \
  --cluster create \
    $(host messenger-redis|awk '{print $4}'):6379 \
    $(host messenger-redis-1|awk '{print $4}'):6379 \
    $(host messenger-redis-2|awk '{print $4}'):6379 \
    $(host messenger-redis-3|awk '{print $4}'):6379 \
    $(host messenger-redis-4|awk '{print $4}'):6379 \
    $(host messenger-redis-5|awk '{print $4}'):6379
