<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/resource.proto

namespace GPBMetadata\Google\Api;

class Resource
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
google/api/resource.proto
google.api google/protobuf/descriptor.proto"�
ResourceDescriptor
type (	
pattern (	

name_field (	7
history (2&.google.api.ResourceDescriptor.History
plural (	
singular (	3
style
 (2$.google.api.ResourceDescriptor.Style"[
History
HISTORY_UNSPECIFIED 
ORIGINALLY_SINGLE_PATTERN
FUTURE_MULTI_PATTERN"8
Style
STYLE_UNSPECIFIED 
DECLARATIVE_FRIENDLY"5
ResourceReference
type (	

child_type (	Bn
com.google.apiBResourceProtoPZAgoogle.golang.org/genproto/googleapis/api/annotations;annotations��GAPIbproto3'
        , true);

        static::$is_initialized = true;
    }
}

