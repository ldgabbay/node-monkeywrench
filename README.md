node-monkeywrench
=================

Node.js helper library

## Configuration

# Introduction

Configuration can come from a variety of sources:

- text files
    - [INI file](http://en.wikipedia.org/wiki/INI_file) format
    - Java [.properties](http://en.wikipedia.org/wiki/.properties) format
    - [JSON](http://en.wikipedia.org/wiki/JSON) format
    - [YAML](http://en.wikipedia.org/wiki/YAML)
    - Apple PList
- command line options
    - single character options (`-d`)
    - multiple character options (`--dir`)
- environment variables (`$HOME`)
- Windows registry

`monkeywrench` was designed to extract configuration from nodejs
applications.

# Configuration

Configuration is configured with a JSON file of the following format:

    {
        "targets": {
            "propertyname": {
                "description": "This is a one-liner about what this property does",
                "long_description": "This is a much longer description of the property.",
                "default": false,
                "required": false,
                "type": "boolean",
                "where": [
            }
        }
        "sources": [
            {"type": "file", "filename": "~/.myconfig"},
            {"type": "env"}
        ],
    }