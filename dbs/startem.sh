#!/usr/bin/env bash
redis-server accounts.conf &
redis-server sessions.conf &
redis-server provisioner.conf &
redis-server work-queue.conf &